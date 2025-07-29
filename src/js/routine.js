const skinQuestions = [
  {
    q: "How does your skin feel when you wake up?",
    type: "select",
    options: ["Select any option", "Tight", "Oily", "Balanced", "Dry"],
  },
  {
    q: "Where do you usually notice oiliness?",
    type: "select",
    options: ["Select any option", "T-zone", "Everywhere", "Nowhere"],
  },
  {
    q: "Do you experience flaking or dry patches?",
    type: "select",
    options: ["Select any option", "Often", "Rarely", "Never"],
  },
  {
    q: "How sensitive is your skin to new products?",
    type: "select",
    options: ["Select any option", "Very", "Moderate", "Not sensitive"],
  },
  {
    q: "Do you get breakouts?",
    type: "select",
    options: ["Select any option", "Yes", "Sometimes", "Rarely", "Never"],
  },
  {
    q: "How often do you use sunscreen?",
    type: "select",
    options: ["Select any option", "Daily", "Occasionally", "Never"],
  },
  {
    q: "Does your skin feel tight after cleansing?",
    type: "select",
    options: ["Select any option", "Yes", "No", "Sometimes"],
  },
  {
    q: "How would you describe your pores?",
    type: "select",
    options: [
      "Select any option",
      "Large & visible",
      "Small",
      "Only visible on nose",
    ],
  },
  {
    q: "Do you have visible pigmentation or uneven tone?",
    type: "select",
    options: ["Select any option", "Yes", "Mild", "No"],
  },
  {
    q: "Do you notice fine lines or wrinkles?",
    type: "select",
    options: ["Select any option", "Yes", "Very few", "None"],
  },
  {
    q: "What is your skin goal?",
    type: "select",
    options: [
      "Select any option",
      "Glowing skin",
      "Acne control",
      "Anti-aging",
      "Hydration",
    ],
  },
  {
    q: "Do you use exfoliants (scrubs, acids)?",
    type: "select",
    options: ["Select any option", "Yes, weekly", "Sometimes", "Never"],
  },
  {
    q: "Do you experience redness or irritation?",
    type: "select",
    options: ["Select any option", "Often", "Rarely", "Never"],
  },
  {
    q: "Do you live in a humid or dry environment?",
    type: "select",
    options: ["Select any option", "Humid", "Dry", "Balanced"],
  },
  {
    q: "How does your skin feel mid-day?",
    type: "select",
    options: ["Select any option", "Oily", "Dry", "Normal"],
  },
  {
    q: "What skin issues bother you the most?",
    type: "text",
  },
  {
    q: "Do you wear makeup daily?",
    type: "select",
    options: ["Select any option", "Yes", "Sometimes", "No"],
  },
  {
    q: "Do you smoke or drink regularly?",
    type: "select",
    options: ["Select any option", "Yes", "No"],
  },
  {
    q: "Are you under high stress lately?",
    type: "select",
    options: ["Select any option", "Yes", "Somewhat", "No"],
  },
  {
    q: "Any allergies or known skin conditions?",
    type: "text",
  },
];

function toggleMenu() {
  const nav = document.getElementById("navLinks");
  nav.classList.toggle("active");
}


let current = 0;
const answers = [];
let progressBar;
let questions = [];

function showSection(id) {
  const form = document.getElementById("skinTypeForm");
  document
    .querySelectorAll(".tool-section")
    .forEach((sec) => sec.classList.add("hidden"));
  document.getElementById(id).classList.remove("hidden");

  if (id === "disease" || id === "detect") {
    document.getElementById("camera-options").classList.remove("hidden");
  } else {
    document.getElementById("camera-options").classList.add("hidden");
  }

  if (id === "details" && current === 0) {
    if (!form) {
      console.error("Form not found!");
      return;
    }

    // Clear and reset
    form.innerHTML = "";
    answers.length = 0;
    current = 0;
    questions = skinQuestions;

    progressBar = createProgressBar();
    form.parentElement.insertBefore(progressBar, form);
    updateProgressBar(progressBar, 0, questions.length);
    startDiagnosisFlow();
  } else if (id === "camera") {
    openCamera();
  } else if (id === "ipcam") {
    initIPCam();
  }
}

function startDiagnosisFlow() {
  const form = document.getElementById("skinTypeForm");
  form.innerHTML = "";
  current = 0;
  answers.length = 0;

  if (!form.parentElement.contains(progressBar)) {
    form.parentElement.insertBefore(progressBar, form);
  }

  updateProgressBar(progressBar, 0, questions.length);

  const block = createQuestionBlock(
    questions[current].q,
    current,
    questions[current].type,
    questions[current].options,
    () => handleAnswer(form)
  );

  form.appendChild(block);

  // Optional: small scroll on first render
  window.scrollTo({ top: block.offsetTop - 100, behavior: "smooth" });
}

function handleAnswer(form) {
  current++;

  if (current < questions.length) {
    const q = questions[current];
    const block = createQuestionBlock(q.q, current, q.type, q.options, () =>
      handleAnswer(form)
    );
    form.appendChild(block);

    // Scroll slightly above new question
    window.scrollTo({ top: block.offsetTop - 100, behavior: "smooth" });

    updateProgressBar(progressBar, current, questions.length);
  } else {
    // ✅ Show submit and clear buttons instead of auto-submitting
    const buttons = showEndButtons(
      () => {
        form.innerHTML = "";
        if (progressBar && progressBar.parentElement) {
          progressBar.parentElement.removeChild(progressBar);
        }

        const msg = document.createElement("p");
        msg.textContent = "✅ Thank you! Your responses have been submitted.";
        msg.style.marginTop = "20px";
        msg.id = "thankYouMsg";
        form.appendChild(msg);

        localStorage.setItem(
          "diseaseDetectionAnswers",
          JSON.stringify(answers)
        );
        // ⏳ Remove message & trigger next step after delay
        setTimeout(() => {
          const msgEl = document.getElementById("thankYouMsg");
          if (msgEl) msgEl.remove();

          // 🚀 Call your next function here
          submitImage(4, null); // 🔁 <-- Replace with your actual function name
        }, 1500);
      },
      () => {
        form.innerHTML = "";
        answers.length = 0;
        current = 0;
        updateProgressBar(progressBar, 0, questions.length);
        const q = questions[0];
        const firstBlock = createQuestionBlock(q.q, 0, q.type, q.options, () =>
          handleAnswer(form)
        );
        form.appendChild(firstBlock);
      }
    );

    form.appendChild(buttons);
  }
}

function createProgressBar() {
  const bar = document.createElement("div");
  bar.className = "progress-bar";
  return bar;
}

function updateProgressBar(bar, current, total) {
  bar.textContent = `${current}/${total}`;
  bar.style.width = `${(current / total) * 100}%`;
}

function createQuestionBlock(q, index, type, options = [], onAnswered) {
  const wrapper = document.createElement("div");
  wrapper.className = "question-block";
  wrapper.dataset.question = index;

  const label = document.createElement("label");
  label.textContent = `${index + 1}. ${q}`;
  wrapper.appendChild(label);

  let input;
  let nextBtn = document.createElement("button");
  nextBtn.textContent = "Next";
  nextBtn.type = "button";
  nextBtn.className = "next-btn";
  nextBtn.disabled = true;

  if (type === "select") {
    input = document.createElement("select");
    options.forEach((opt) => {
      const o = document.createElement("option");
      o.value = opt;
      o.textContent = opt;
      input.appendChild(o);
    });
    input.addEventListener("change", () => {
      answers[index] = input.value;
      nextBtn.disabled = false;
      updateProgressBar(
        progressBar,
        answers.filter((a) => a && a.length !== 0).length,
        questions.length
      );
    });
  } else if (type === "multi-select") {
    input = document.createElement("div");
    input.className = "checkbox-group";

    options.forEach((opt) => {
      const checkboxWrapper = document.createElement("div");
      checkboxWrapper.className = "checkbox-option";

      const checkbox = document.createElement("input");
      checkbox.type = "checkbox";
      checkbox.value = opt;

      const span = document.createElement("span");
      span.textContent = opt;

      checkbox.addEventListener("change", () => {
        const selected = [...input.querySelectorAll("input:checked")].map(
          (cb) => cb.value
        );
        answers[index] = selected;
        nextBtn.disabled = selected.length === 0;
        updateProgressBar(
          progressBar,
          answers.filter((a) => a && a.length !== 0).length,
          questions.length
        );
      });

      checkboxWrapper.appendChild(span);
      checkboxWrapper.appendChild(checkbox);
      input.appendChild(checkboxWrapper);
    });
  } else {
    input = document.createElement("input");
    input.type = "text";
    input.placeholder = "Type your answer...";
    input.addEventListener("input", () => {
      answers[index] = input.value;
      nextBtn.disabled = input.value.trim() === "";
      updateProgressBar(
        progressBar,
        answers.filter((a) => a && a.length !== 0).length,
        questions.length
      );
    });
  }

  nextBtn.onclick = () => {
    if (onAnswered) onAnswered();
  };

  wrapper.appendChild(input);
  wrapper.appendChild(nextBtn);

  return wrapper;
}

function showEndButtons(onSubmit, onClear) {
  const box = document.createElement("div");
  box.className = "end-buttons";

  const submit = document.createElement("button");
  submit.textContent = "Submit";
  submit.onclick = onSubmit;

  const clear = document.createElement("button");
  clear.textContent = "Clear All";
  clear.onclick = onClear;

  box.append(submit, clear);
  return box;
}

function toggleCamera() {
  const camOptions = document.getElementById("camera-options");
  camOptions.classList.toggle("hidden");
}

function previewImage() {
  const file = document.getElementById("imageInput").files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = function (e) {
      document.getElementById("previewImage").src = e.target.result;
      document
        .getElementById("imagePreviewContainer")
        .classList.remove("hidden");
    };
    reader.readAsDataURL(file);
  }
}

function clearImage() {
  document.getElementById("imageInput").value = "";
  document.getElementById("imagePreviewContainer").classList.add("hidden");
  document.getElementById("CameradiagnosisResults").classList.add("hidden");
}

function submitImage(no = null, imgFile) {
  let file;
  let element;

  if (no === 1) {
    file = imgFile;
    element = 1;
  } else if (no === 2) {
    file = imgFile;
    element = 2;
  } else if (no === 4) {
    element = 4;
    file = imgFile;
  } else {
    element = 0;
    file = document.getElementById("imageInput").files[0];
  }

  if (!no === 4) {
    if (!file) return alert("Please select an image first.");
  }

  const formData = new FormData();
  formData.append("image", file);

  fetch("http://localhost:5000/detect-disease", {
    method: "POST",
    body: formData,
  })
    // .then((res) => res.json())
    // .then((data) => {
    //   displayDiseaseInfo(data);
    //   scrollToDiagnosisResults();
    // })
    .catch((err) => {
      console.error(err);
      alert("Upload failed." + err);
    });

  setTimeout(() => {
    const mockRoutineData = {
      skinType: "Combination",
      concerns: "Mild acne, dark spots",
      recommendedRoutine: {
        morning: "Gentle cleanser, Niacinamide serum, Moisturizer, SPF 50",
        evening:
          "Double cleanse, Retinol (2x/week), Hydrating serum, Night cream",
      },
      ingredientsToAvoid: "Heavy oils, comedogenic ingredients",
      lifestyleTips:
        "Drink 2.5L water daily, avoid touching face, 7+ hrs sleep",
      accuracy: "96.75%",
    };

    // Simulate successful flow
    displayRoutineInfo(mockRoutineData, element, file);
    scrollToDiagnosisResults();
  }, 1000);
}

function displayRoutineInfo(data, element, imageFile) {
  let val;
  let container;
  if (element === 1) {
    val = "Captured";
    container = document.getElementById("CameradiagnosisResults");
    file = imageFile;
  } else if (element === 2) {
    val = "IPcam Captured";
    container = document.getElementById("IPCameradiagnosisResults");
    file = imageFile;
    console.log(file);
  } else if (element === 4) {
    val = "No Image";
    container = document.getElementById("DetailsDiagnosisResults");
    file = imageFile;
  } else {
    val = "Uploaded";
    container = document.getElementById("diagnosisResults");
    file = document.getElementById("previewImage").src;
  }

  container.innerHTML = ""; // Clear old content
  container.classList.remove("hidden");

  const heading = document.createElement("h3");
  heading.textContent = "🧴 Personalized Skincare Routine Report";
  heading.className = "result-heading";
  container.appendChild(heading);

  const infoFields = [
    { key: "skinType", label: "Skin Type Detected" },
    { key: "concerns", label: "Main Concerns" },
    {
      key: "recommendedRoutine",
      label: "Recommended Routine",
      isNested: true,
    },
    { key: "ingredientsToAvoid", label: "Ingredients to Avoid" },
    { key: "lifestyleTips", label: "Lifestyle & Wellness Tips" },
    { key: "accuracy", label: "Routine Accuracy Confidence" },
  ];

  infoFields.forEach(({ key, label, isNested }) => {
    if (data[key]) {
      const block = document.createElement("div");
      block.className = "info-block";
      if (isNested) {
        block.innerHTML = `<h4>${label}</h4>
          <p><b>Morning:</b> ${data[key].morning}</p>
          <p><b>Evening:</b> ${data[key].evening}</p>`;
      } else {
        block.innerHTML = `<h4>${label}</h4><p>${data[key]}</p>`;
      }
      container.appendChild(block);
    }
  });

  const mapBtn = document.createElement("button");
  mapBtn.textContent = "Find Dermatologists Nearby 🧑‍⚕️";
  mapBtn.className = "map-button";
  mapBtn.onclick = () => {
    const query = "dermatologist clinic near me";
    window.open(
      `https://www.google.com/maps/search/${encodeURIComponent(query)}`,
      "_blank"
    );
  };

  const saveBtn = document.createElement("button");
  saveBtn.textContent = "💾 Download Routine as PDF";
  saveBtn.className = "pdf-button";
  saveBtn.onclick = () => saveDiagnosisAsPDF(data, file, val, element);

  container.appendChild(saveBtn);
  container.appendChild(mapBtn);
}

function scrollToDiagnosisResults() {
  const section = document.getElementById("diagnosisResults");
  section.scrollIntoView({ behavior: "smooth" });
}

function saveDiagnosisAsPDF(data, uploadedImageSrc, val, element) {
  const { jsPDF } = window.jspdf;
  const pdf = new jsPDF("p", "mm", "a4");

  const pageWidth = pdf.internal.pageSize.getWidth();
  const pageHeight = pdf.internal.pageSize.getHeight();

  const accountName =
    typeof accountHolder !== "undefined" ? accountHolder : "User";
  const filename = `${accountName}_Skincare_Routine_Report.pdf`;

  const logoImg = new Image();
  logoImg.src = "/src/img/logo1.png";
  const watermarkImg = new Image();
  watermarkImg.src = "/src/img/logo4.png";
  const headerLogo = new Image();
  headerLogo.src = "/src/img/logo.png";

  logoImg.onload = () => {
    watermarkImg.onload = () => {
      headerLogo.onload = () => {
        let y = 50;

        const addWatermark = () => {
          const wmWidth = 260;
          const wmHeight = 260;
          const canvas = document.createElement("canvas");
          canvas.width = wmWidth;
          canvas.height = wmHeight;
          const ctx = canvas.getContext("2d");
          ctx.clearRect(0, 0, wmWidth, wmHeight);
          ctx.save();
          ctx.translate(wmWidth / 2, wmHeight / 2);
          ctx.rotate((-35 * Math.PI) / 180);
          ctx.drawImage(
            watermarkImg,
            -wmWidth / 2,
            -wmHeight / 2,
            wmWidth,
            wmHeight
          );
          ctx.restore();
          const rotated = canvas.toDataURL("image/png");
          const x = (pageWidth - wmWidth) / 2;
          const y = (pageHeight - wmHeight) / 2;
          pdf.setGState(new pdf.GState({ opacity: 0.07 }));
          pdf.addImage(rotated, "PNG", x, y, wmWidth, wmHeight);
          pdf.setGState(new pdf.GState({ opacity: 1 }));
        };

        const addHeader = () => {
          pdf.addImage(logoImg, "PNG", 15, 10, 30, 20);

          pdf.setFont("helvetica", "bold");
          pdf.setFontSize(24);
          pdf.setTextColor(0, 102, 51);
          pdf.text("DermAI", 55, 17);

          pdf.setFont("helvetica", "italic");
          pdf.setFontSize(11);
          pdf.setTextColor(64, 64, 64);
          pdf.text("Scan, Fix, Glow", 55, 23);

          pdf.setFont("helvetica", "normal");
          pdf.setFontSize(9.5);
          pdf.setTextColor(90, 90, 90);
          pdf.text("https://kiddosphere.in/dermai", 55, 28);
          pdf.text("derm.ai@gmail.com", 55, 32);

          pdf.setDrawColor(160);
          pdf.setLineWidth(0.4);
          pdf.line(15, 36, pageWidth - 15, 36);
        };

        const addFooter = () => {
          const footerY = pageHeight - 20;
          pdf.setDrawColor(100);
          pdf.setLineWidth(0.6);
          pdf.line(15, footerY, pageWidth - 15, footerY);
          pdf.setFontSize(9);
          pdf.setFont("helvetica", "normal");
          pdf.setTextColor(120);
          pdf.text("https://kiddosphere.in/dermai", 15, footerY + 7);
          pdf.text("derm.ai@gmail.com", pageWidth - 60, footerY + 7);
          pdf.setFont("helvetica", "italic");
          pdf.setFontSize(9.5);
          pdf.setTextColor(110);
          pdf.text(
            "© DermAI | Scan • Fix • Glow",
            pageWidth / 2,
            pageHeight - 5,
            { align: "center" }
          );
        };

        const addSection = (label, content) => {
          if (!content) return;
          pdf.setFont("helvetica", "bold");
          pdf.setFontSize(13.5);
          pdf.setTextColor(0, 100, 0);
          pdf.text(label, 15, y);
          y += 6;

          pdf.setFont("helvetica", "normal");
          pdf.setFontSize(11.2);
          pdf.setTextColor(51);
          const lines = pdf.splitTextToSize(content, pageWidth - 30);
          pdf.text(lines, 15, y);
          y += lines.length * 6 + 2;

          if (y > pageHeight - 40) {
            pdf.addPage();
            addWatermark();
            addHeader();
            y = 40;
          }
        };

        const addQASection = () => {
          const storedAnswers = JSON.parse(
            localStorage.getItem("diseaseDetectionAnswers") || "[]"
          );

          if (!storedAnswers.length) return;

          pdf.setFont("helvetica", "bold");
          pdf.setFontSize(16);
          pdf.setTextColor(30, 100, 60);
          pdf.text("User Responses Summary", 15, y);
          y += 8;

          questions = skinQuestions.map((item) => item.q);
          alert(val);
          storedAnswers.forEach((answer, i) => {
            const question = questions[i] || `Q${i + 1}`;
            const response = Array.isArray(answer) ? answer.join(", ") : answer;

            pdf.setFont("helvetica", "bold");
            pdf.setFontSize(11.5);
            pdf.setTextColor(0, 64, 128);
            const qLines = pdf.splitTextToSize(
              `Q${i + 1}: ${question}`,
              pageWidth - 30
            );
            pdf.text(qLines, 15, y);
            y += qLines.length * 5;

            pdf.setFont("helvetica", "normal");
            pdf.setFontSize(10.5);
            pdf.setTextColor(60);
            const aLines = pdf.splitTextToSize(
              `:-- ${response || "No response"}`,
              pageWidth - 30
            );
            pdf.text(aLines, 15, y);
            y += aLines.length * 5;

            y += 3;

            if (y > pageHeight - 40) {
              pdf.addPage();
              addWatermark();
              addHeader();
              y = 40;
            }
          });

          // Divider
          pdf.setDrawColor(180);
          pdf.line(15, y, pageWidth - 15, y);
          y += 10;
        };

        // Page Setup
        addWatermark();
        addHeader();
        addFooter();

        pdf.setFont("helvetica", "bold");
        pdf.setFontSize(21);
        pdf.setTextColor(34, 102, 34);
        pdf.text(
          `Personalized Skincare Routine for ${accountName}`,
          pageWidth / 2,
          y,
          {
            align: "center",
          }
        );
        y += 12;

        const addScanImage = () => {
          if (uploadedImageSrc) {
            const scan = new Image();
            scan.src = uploadedImageSrc;
            scan.onload = () => {
              const imgWidth = 90;
              const imgHeight = (scan.height * imgWidth) / scan.width;
              const centerImgX = (pageWidth - imgWidth) / 2;

              if (y + imgHeight + 40 > pageHeight - 30) {
                pdf.addPage();
                addWatermark();
                addHeader();
                y = 40;
              }

              y += 10;
              pdf.setFont("helvetica", "bold");
              pdf.setTextColor(34, 102, 34);
              pdf.setFontSize(18);
              pdf.text("==> " + val + " Skin Image:", 15, y);
              y += 6;

              pdf.addImage(scan, "PNG", centerImgX, y, imgWidth, imgHeight);
              y += imgHeight + 8;

              addNoteAndFooter();
            };
          } else {
            addNoteAndFooter();
          }
        };

        const addNoteAndFooter = () => {
          if (y + 35 > pageHeight - 30) {
            pdf.addPage();
            addWatermark();
            addHeader();
            y = 40;
          }

          const noteText =
            "This skincare routine is generated using AI for educational and preventive purposes. For personalized treatment or concerns, consult a licensed dermatologist.";
          const lines = pdf.splitTextToSize(noteText, pageWidth - 30);

          pdf.setDrawColor(160);
          pdf.rect(14, y - 3, pageWidth - 28, lines.length * 6 + 10);

          pdf.setFont("helvetica", "bold");
          pdf.setFontSize(12);
          pdf.setTextColor(80, 0, 0);
          pdf.text("Note:", 16, y + 5);

          pdf.setFont("helvetica", "normal");
          pdf.setFontSize(10);
          pdf.setTextColor(50);
          pdf.text(lines, 16, y + 12);

          addFooter();
          pdf.save(filename);
        };

        if (!element === 4) {
          addSection("=> Skin Type Detected", data.skinType);
          addSection("=> Main Concerns", data.concerns);

          if (data.recommendedRoutine) {
            const routineText = `Morning: ${data.recommendedRoutine.morning}\nEvening: ${data.recommendedRoutine.evening}`;
            addSection("=> Recommended Routine", routineText);
          }

          addSection("=> Ingredients to Avoid", data.ingredientsToAvoid);
          addSection("=> Lifestyle & Wellness Tips", data.lifestyleTips);
          addSection("=> Routine Accuracy Confidence", data.accuracy);

          addScanImage();
        } else {
          addQASection();
          addSection("=> Skin Type Detected", data.skinType);
          addSection("=> Main Concerns", data.concerns);

          if (data.recommendedRoutine) {
            const routineText = `Morning: ${data.recommendedRoutine.morning}\nEvening: ${data.recommendedRoutine.evening}`;
            addSection("=> Recommended Routine", routineText);
          }

          addSection("=> Ingredients to Avoid", data.ingredientsToAvoid);
          addSection("=> Lifestyle & Wellness Tips", data.lifestyleTips);
          addSection("=> Routine Accuracy Confidence", data.accuracy);

          addNoteAndFooter();
        }
      };
    };
  };
}

function openCamera() {
  let imageDataURL;
  const video = document.getElementById("videoFeed");
  const canvas = document.getElementById("captureCanvas");
  const capturedImage = document.getElementById("capturedImage");

  const captureBtn = document.getElementById("captureBtn");
  const uploadBtn = document.getElementById("uploadBtn");
  const retakeBtn = document.getElementById("retakeBtn");
  const openCamBtn = document.getElementById("openCamBtn");

  const cameraDiv = document.getElementById("camera");
  let stream;

  document.getElementById("postCaptureButtons").style.display = "none";
  document.getElementById("cameraButtons").style.display = "none";

  document.getElementById("openCamera").style.display = "block";
  openCamBtn.onclick = () => {
    startCamera();
    document.getElementById("openCamera").style.display = "none";
  };

  // ✅ START camera
  const startCamera = async () => {
    try {
      stream = await navigator.mediaDevices.getUserMedia({ video: true });
      video.srcObject = stream;
      video.style.display = "block";
      capturedImage.style.display = "none";
      canvas.style.display = "none";
      document.getElementById("cameraButtons").style.display = "block";
      document.getElementById("postCaptureButtons").style.display = "none";
      document.getElementById("openCamera").style.display = "none";
      // document.getElementById("cameraGIf").style.display = "none";
    } catch (err) {
      alert(err + "error");
      document.getElementById("openCamera").style.display = "block";
      alert(
        "Camera permission denied or not supported. Please enable camera access in browser settings and reload the page. 😢"
      );
    }
  };

  // 📸 CAPTURE
  captureBtn.onclick = () => {
    const context = canvas.getContext("2d");
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    context.drawImage(video, 0, 0, canvas.width, canvas.height);

    imageDataURL = canvas.toDataURL("image/png");
    capturedImage.src = imageDataURL;

    video.style.display = "none";
    capturedImage.style.display = "block";
    document.getElementById("cameraButtons").style.display = "none";
    document.getElementById("postCaptureButtons").style.display = "block";
    stopCamera();
  };

  // 🔁 RETAKE
  retakeBtn.onclick = () => {
    startCamera();
  };

  uploadBtn.onclick = () => {
    submitImage(1, imageDataURL);
  };

  // 🧹 STOP camera if needed
  const stopCamera = () => {
    if (stream) {
      stream.getTracks().forEach((track) => track.stop());
    }
  };

  // 👀 Watch when camera section is visible
  const observer = new MutationObserver(() => {
    if (!cameraDiv.classList.contains("hidden")) {
      startCamera();
    } else {
      stopCamera();
    }
  });

  observer.observe(cameraDiv, { attributes: true, attributeFilter: ["class"] });
}

function initIPCam() {
  let imageDataURL = "";
  const video = document.getElementById("ipcamFeed"); // 👉 This is an <img> tag, NOT <video>
  const canvas = document.getElementById("ipcamCanvas");
  const capturedImage = document.getElementById("ipCapturedImage");

  const captureBtn = document.getElementById("ipCaptureBtn");
  const uploadBtn = document.querySelector(
    ".ipPostCaptureButtons button:nth-child(1)"
  );
  const retakeBtn = document.querySelector(
    ".ipPostCaptureButtons button:nth-child(2)"
  );

  const postButtons = document.querySelector(".ipPostCaptureButtons");
  const canvasCtx = canvas.getContext("2d");

  let ipStreamURL = "";
  video.style.display = "none";
  capturedImage.style.display = "none";
  captureBtn.style.display = "none";
  canvas.style.display = "none";

  // ✅ Validate IP cam URL (basic regex check)
  window.validateIPURL = (url) => {
    const feedback = document.getElementById("urlFeedback");
    const valid = /^http:\/\/\d{1,3}(\.\d{1,3}){3}(:\d+)?(\/video)?$/.test(url);
    if (valid) {
      feedback.textContent = "✅ Looks good!";
      feedback.style.color = "green";
      ipStreamURL = url;
    } else {
      feedback.textContent = "❌ Invalid URL format.";
      feedback.style.color = "crimson";
      ipStreamURL = "";
    }
  };

  // 🔌 Connect to IP cam
  window.connectIPCam = async () => {
    canvas.style.display = "none";

    if (!ipStreamURL) {
      showToast("Please enter a valid IP cam URL before connecting.", "error");
      return;
    }

    try {
      const testImg = new Image();
      testImg.crossOrigin = "anonymous";
      testImg.src = ipStreamURL + "?t=" + new Date().getTime();

      testImg.onload = () => {
        const proxiedURL = `http://localhost:5000/ipcam-proxy?url=${encodeURIComponent(
          ipStreamURL
        )}`;
        video.crossOrigin = "anonymous"; // ✅ Avoid canvas taint
        video.src = proxiedURL;

        video.style.display = "block";
        capturedImage.style.display = "none";
        postButtons.style.display = "none";
        showToast("✅ IP Cam connected successfully!", "success");
        captureBtn.style.display = "block";
      };

      testImg.onerror = () => {
        video.src = "";
        showToast(
          "❌ Failed to load video feed. Check the IP or Wi-Fi.",
          "error"
        );
      };
    } catch (err) {
      showToast("Something went wrong while connecting to IP cam.", "error");
      console.error(err);
    }
  };

  // ❌ Reset
  window.resetIPURL = () => {
    document.getElementById("ipcamURL").value = "";
    document.getElementById("urlFeedback").textContent = "";
    video.src = "";
    video.style.display = "none";
    capturedImage.style.display = "none";
    postButtons.style.display = "none";
    ipStreamURL = "";
  };

  // 📸 Capture from MJPEG (img tag)
  captureBtn.onclick = () => {
    captureBtn.style.display = "none";
    // capturedImage.style.display = "block";
    canvas.style.display = "block";
    video.style.display = "none";
    postButtons.style.display = "block";

    // ✅ Use .naturalWidth and .naturalHeight for <img> tag
    canvas.width = video.naturalWidth;
    canvas.height = video.naturalHeight;

    canvasCtx.drawImage(video, 0, 0, canvas.width, canvas.height);
    imageDataURL = canvas.toDataURL("image/png");
    capturedImage.src = imageDataURL;
  };

  // 🔄 Retake
  window.retakeIPCam = () => {
    connectIPCam();
  };

  // ⬆️ Upload
  uploadBtn.onclick = () => {
    if (!imageDataURL || imageDataURL.length < 50) {
      showToast("❌ Capture an image before uploading.", "error");
      return;
    }
    submitImage(2, imageDataURL);
  };
}

function showToast(message, type = "info") {
  const toast = document.createElement("div");
  toast.textContent = message;
  toast.style.position = "fixed";
  toast.style.bottom = "20px";
  toast.style.left = "50%";
  toast.style.transform = "translateX(-50%)";
  toast.style.padding = "12px 20px";
  toast.style.backgroundColor =
    type === "success" ? "#28a745" : type === "error" ? "#dc3545" : "#007bff";
  toast.style.color = "#fff";
  toast.style.fontSize = "1rem";
  toast.style.borderRadius = "8px";
  toast.style.boxShadow = "0 2px 8px rgba(0,0,0,0.2)";
  toast.style.zIndex = 9999;
  document.body.appendChild(toast);

  setTimeout(() => {
    toast.style.transition = "opacity 0.5s ease";
    toast.style.opacity = "0";
    setTimeout(() => document.body.removeChild(toast), 500);
  }, 3000);
}
