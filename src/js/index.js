// let current = 0;
// const progressBar = document.createElement("div");
// const answers = [];
// const loc = [
//   {
//     q: "Where does the skin affected?",
//     type: "select",
//     opitons: ["Face", "Other area of body"],
//   },
// ];
// function toggleMenu() {
//   const nav = document.getElementById("navLinks");
//   nav.classList.toggle("active");
// }
function toggleMenu() {
  document.getElementById("navLinks").classList.toggle("active");
}


// const face = [
  // {
  //   q: "Where on your face is the issue located?",
  //   type: "select",
  //   options: [
  //     "Forehead",
  //     "Cheeks",
  //     "Nose",
  //     "Chin",
  //     "Jawline",
  //     "Around eyes",
  //     "Around lips",
  //     "Full face",
  //   ],
  // },
  // {
  //   q: "What does the issue look like?",
  //   type: "multi-select",
  //   options: [
  //     "Red patches or bumps",
  //     "Itchy or burning skin",
  //     "Whiteheads/Blackheads",
  //     "Blisters or pus-filled spots",
  //     "Dark or discolored patches",
  //     "Dry, flaky, or scaly skin",
  //     "Swollen or painful area",
  //     "Open wounds or cracked skin",
  //   ],
  // },
  // {
  //   q: "How long has the issue been present?",
  //   type: "select",
  //   options: ["Less than 1 week", "1–4 weeks", "More than a month"],
  // },
  // {
  //   q: "Is the issue constant or does it come and go?",
  //   type: "select",
  //   options: ["Constant", "Comes and goes", "Triggered by something"],
  // },
  // {
  //   q: "Have you used any new skincare or makeup products recently?",
  //   type: "select",
  //   options: ["Yes", "No", "Not Sure"],
  // },
  // {
  //   q: "Have you experienced any of these triggers recently?",
  //   type: "multi-select",
  //   options: [
  //     "Extreme weather (cold, wind, sun)",
  //     "Hormonal changes or menstruation",
  //     "Stress or lack of sleep",
  //     "Spicy or allergy-prone food",
  //     "Shaving/waxing",
  //     "New detergent/pillowcase",
  //   ],
  // },
  // {
  //   q: "Do you have a history of any of the following skin conditions?",
  //   type: "multi-select",
  //   options: [
  //     "Acne",
  //     "Rosacea",
  //     "Eczema",
  //     "Psoriasis",
  //     "Melasma",
  //     "Sensitive skin",
  //     "None",
  //   ],
  // },
  // {
  //   q: "Do you have any known medical conditions?",
  //   type: "multi-select",
  //   options: [
  //     "PCOS",
  //     "Thyroid issues",
  //     "Allergies",
  //     "Hormonal disorders",
  //     "None",
  //   ],
  // },
  // {
  //   q: "Have you taken any medication or treatment for this before?",
  //   type: "select",
  //   options: ["Yes, prescribed", "Yes, OTC", "No"],
  // },
  // {
  //   q: "Does it affect your confidence or routine?",
  //   type: "select",
  //   options: ["Yes", "No", "Sometimes"],
  // },
// ];
// const otherArea = [
//   {
  //   q: "Which part of your body is affected?",
  //   type: "select",
  //   options: [
  //     "Scalp",
  //     "Neck",
  //     "Chest",
  //     "Back",
  //     "Arms",
  //     "Legs",
  //     "Hands",
  //     "Feet",
  //     "Groin area",
  //     "Underarms",
  //     "Around nails",
  //     "Full body",
  //   ],
  // },
  // {
  //   q: "What does the affected area look like?",
  //   type: "multi-select",
  //   options: [
  //     "Red or pink patches",
  //     "Blisters or boils",
  //     "Dry/flaky/scaly skin",
  //     "Cracked or bleeding skin",
  //     "Itchy rash",
  //     "Darkened or pigmented area",
  //     "Raised bumps",
  //     "Open sores or ulcers",
  //     "Oozing or discharge",
  //   ],
  // },
  // {
  //   q: "How large is the affected area?",
  //   type: "select",
  //   options: [
  //     "Tiny spot (coin-sized or smaller)",
  //     "Moderate area (palm-sized)",
  //     "Large patch (bigger than a hand)",
  //     "Multiple small areas",
  //     "Covers most of the body part",
  //   ],
  // },
  // {
  //   q: "Is it painful, itchy, or numb?",
  //   type: "multi-select",
  //   options: ["Itchy", "Painful", "Tingling", "Numb", "None of these"],
  // },
  // {
  //   q: "When did you first notice it?",
  //   type: "select",
  //   options: [
  //     "Today",
  //     "1–3 days ago",
  //     "This week",
  //     "Over a week ago",
  //     "Over a month ago",
  //   ],
  // },
  // {
  //   q: "Does it seem to be spreading?",
  //   type: "select",
  //   options: ["Yes", "No", "Not sure"],
  // },
  // {
  //   q: "Have you recently experienced any of the following?",
  //   type: "multi-select",
  //   options: [
  //     "Fever or chills",
  //     "Body aches",
  //     "Sweating or heat exposure",
  //     "Allergic reaction",
  //     "New clothes or detergent",
  //     "Close contact with infected person or animal",
  //   ],
  // },
  // {
  //   q: "Do you have a personal or family history of skin conditions?",
  //   type: "multi-select",
  //   options: [
  //     "Eczema",
  //     "Psoriasis",
  //     "Fungal infections",
  //     "Hives",
  //     "Vitiligo",
  //     "None",
  //     "Don’t know",
  //   ],
  // },
  // {
  //   q: "Have you taken any medication or ointment for it?",
  //   type: "select",
  //   options: ["Yes - prescribed", "Yes - over the counter", "No"],
  // },
  // {
  //   q: "Does it affect your sleep, movement, or daily life?",
  //   type: "select",
  //   options: ["Yes", "No", "Sometimes"],
  // },
// ];
// let questions = [];

// progressBar.className = "progress-bar";

// document.addEventListener("DOMContentLoaded", function () {
//   const faqCards = document.querySelectorAll(".faq-card");

//   // Open the first card by default
//   faqCards[0].classList.add("active");

//   faqCards.forEach((card) => {
//     const question = card.querySelector(".faq-question");

//     question.addEventListener("click", () => {
//       // Close all cards
//       faqCards.forEach((c) => {
//         if (c !== card) c.classList.remove("active");
//       });

//       // Toggle current card
//       card.classList.toggle("active");
//     });
//   });
// });

// window.addEventListener("load", () => {
//   setTimeout(() => {
//     const loader = document.getElementById("face-scanner-loader");
//     const overlay = document.getElementById("overlay-scan");

//     if (loader) {
//       loader.style.transition = "opacity 2s ease";
//       loader.style.opacity = "0";
//       loader.style.pointerEvents = "none";
//     }

//     if (overlay) {
//       overlay.style.transition = "opacity 2s ease";
//       overlay.style.opacity = "0";
//       overlay.style.pointerEvents = "none";
//     }
//   }, 3500);
// });

// function showSection(id, type = null) {
//   const form = document.getElementById("skinForm");
//   document
//     .querySelectorAll(".tool-section")
//     .forEach((sec) => sec.classList.add("hidden"));
//   document.getElementById(id).classList.remove("hidden");

//   // Show camera options only for specific sections
//   if (id === "disease" || id === "detect") {
//     document.getElementById("camera-options").classList.remove("hidden");
//   } else {
//     document.getElementById("camera-options").classList.add("hidden");
//   }

  // if (id === "details" && type === null && current === 0) {
  //   if (!form) {
  //     console.error("Form not found!");
  //     return;
  //   }

  //   // Prevent duplicate progress bar insertion
  //   if (!form.parentElement.contains(progressBar)) {
  //     form.parentElement.insertBefore(progressBar, form);
  //   }

  //   setTimeout(() => startDiagnosisFlow(), 10);
  // } else if (id === "details" && type === 1) {
//     skinRoutineQS();
//   }
// }

// function startDiagnosisFlow() {
//   const form = document.getElementById("skinForm");
//   form.innerHTML = "";
//   answers.length = 0;
//   current = 0;

//   // Ask for location (but skip progress for this)
//   const locBlock = document.createElement("div");
//   locBlock.className = "question-block";

//   const label = document.createElement("label");
//   label.textContent = "Where is the issue located?";
//   locBlock.appendChild(label);

//   const select = document.createElement("select");
//   ["Face", "Other Body Area"].forEach((opt) => {
//     const o = document.createElement("option");
//     o.value = opt.toLowerCase();
//     o.textContent = opt;
//     select.appendChild(o);
//   });
//   locBlock.appendChild(select);

//   const next = document.createElement("button");
//   next.textContent = "Next";
//   next.type = "button";
//   next.onclick = () => {
//     const loc = select.value;
//     if (loc === "face") {
//       questions = face; // Your face questions
//     } else {
//       questions = otherArea; // Your other area questions
//     }

//     form.innerHTML = ""; // Clear location question
//     answers.length = 0;
//     current = 0;

//     if (!form.parentElement.contains(progressBar)) {
//       form.parentElement.insertBefore(progressBar, form);
//     }

//     updateProgress(); // starts at 0/total
//     renderQuestion(current);
//   };

//   locBlock.appendChild(next);
//   form.appendChild(locBlock);
// }

// function renderQuestion(index) {
//   const form = document.getElementById("skinForm");
//   if (index >= questions.length) return;

//   const { q, type, options } = questions[index];
//   const wrapper = document.createElement("div");
//   wrapper.className = "question-block";
//   wrapper.dataset.question = index;

//   const label = document.createElement("label");
//   label.textContent = `${index + 1}. ${q}`;

//   let input;

//   if (type === "select") {
//     input = document.createElement("select");
//     options.forEach((opt) => {
//       const o = document.createElement("option");
//       o.value = opt;
//       o.textContent = opt;
//       input.appendChild(o);
//     });

//     input.addEventListener("input", () => {
//       answers[index] = input.value;
//     });
//   } else if (type === "multi-select") {
//     input = document.createElement("div");
//     input.className = "checkbox-group";

//     options.forEach((opt) => {
//       const checkboxWrapper = document.createElement("div");
//       checkboxWrapper.className = "checkbox-option";

//       const checkbox = document.createElement("input");
//       checkbox.type = "checkbox";
//       checkbox.value = opt;

//       const labelText = document.createElement("span");
//       labelText.textContent = opt;

//       checkbox.addEventListener("change", () => {
//         const selected = [...input.querySelectorAll("input:checked")].map(
//           (cb) => cb.value
//         );
//         answers[index] = selected;
//       });

//       checkboxWrapper.appendChild(labelText);
//       checkboxWrapper.appendChild(checkbox);
//       input.appendChild(checkboxWrapper);
//     });
//   }

//   const nextBtn = document.createElement("button");
//   nextBtn.textContent = "Next";
//   nextBtn.type = "button";
//   nextBtn.onclick = () => {
//     if (type === "multi-select") {
//       const selected = [...input.querySelectorAll("input:checked")].map(
//         (cb) => cb.value
//       );
//       answers[index] = selected;
//     } else if (type == "select") {
//       answers[index] = input.value;
//     }

//     nextBtn.disabled = true;
//     updateProgress();

//     if (index + 1 < questions.length) {
//       renderQuestion(index + 1);
//     } else {
//       showSubmitOptions();
//     }
//   };

//   wrapper.append(label, input, nextBtn);
//   form.appendChild(wrapper);
// }

// function updateProgress() {
//   const filled = answers.filter((a) => a).length;
//   const total = questions.length;
//   progressBar.textContent = `${filled}/${total}`;
//   progressBar.style.width = `${(filled / total) * 100}%`;
// }

// function showSubmitOptions() {
//   const form = document.getElementById("skinForm");
//   const btnWrapper = document.createElement("div");
//   btnWrapper.className = "end-buttons";

//   const submitBtn = document.createElement("button");
//   submitBtn.textContent = "Submit";
//   submitBtn.type = "button";
//   submitBtn.onclick = () => {
//     localStorage.setItem("diseaseDetectionAnswers", JSON.stringify(answers));
//     form.innerHTML = "<p>🧪 Thank you. Your responses have been submitted.</p>";
//   };

//   const clearBtn = document.createElement("button");
//   clearBtn.textContent = "Clear All";
//   clearBtn.type = "button";
//   clearBtn.onclick = () => {
//     form.innerHTML = "";
//     answers.length = 0;
//     current = 0;
//     updateProgress();
//     renderQuestion(current);
//   };

//   btnWrapper.append(submitBtn, clearBtn);
//   form.appendChild(btnWrapper);
// }

// function toggleCamera() {
//   const camOptions = document.getElementById("camera-options");
//   camOptions.classList.toggle("hidden");
// }

// function previewImage() {
//   const file = document.getElementById("imageInput").files[0];
//   if (file) {
//     const reader = new FileReader();
//     reader.onload = function (e) {
//       document.getElementById("previewImage").src = e.target.result;
//       document
//         .getElementById("imagePreviewContainer")
//         .classList.remove("hidden");
//     };
//     reader.readAsDataURL(file);
//   }
// }

// function clearImage() {
//   document.getElementById("imageInput").value = "";
//   document.getElementById("imagePreviewContainer").classList.add("hidden");
// }

// function submitImage() {
//   const file = document.getElementById("imageInput").files[0];
//   if (!file) return alert("Please select an image first.");

//   const formData = new FormData();
//   formData.append("image", file);

//   fetch("http://localhost:5000/detect-disease", {
//     method: "POST",
//     body: formData,
//   })
//     .then((res) => res.json())
//     .then((data) => alert("Uploaded successfully!"))
//     .catch((err) => alert("Upload failed."));
// }

// function skinRoutineQS() {
//   // === Skin Analysis Questions Script ===
//   let skinCurrent = 0;
//   const skinAnswers = [];
//   const skinProgress = document.createElement("div");
//   skinProgress.className = "progress-bar";

//   const skinQuestions = [
//     {
//       q: "How does your skin feel when you wake up?",
//       type: "select",
//       options: ["Tight", "Oily", "Balanced", "Dry"],
//     },
//     {
//       q: "Where do you usually notice oiliness?",
//       type: "select",
//       options: ["T-zone", "Everywhere", "Nowhere"],
//     },
//     {
//       q: "Do you experience flaking or dry patches?",
//       type: "select",
//       options: ["Often", "Rarely", "Never"],
//     },
//     {
//       q: "How sensitive is your skin to new products?",
//       type: "select",
//       options: ["Very", "Moderate", "Not sensitive"],
//     },
//     {
//       q: "Do you get breakouts?",
//       type: "select",
//       options: ["Yes", "Sometimes", "Rarely", "Never"],
//     },
//     {
//       q: "How often do you use sunscreen?",
//       type: "select",
//       options: ["Daily", "Occasionally", "Never"],
//     },
//     {
//       q: "Does your skin feel tight after cleansing?",
//       type: "select",
//       options: ["Yes", "No", "Sometimes"],
//     },
//     {
//       q: "How would you describe your pores?",
//       type: "select",
//       options: ["Large & visible", "Small", "Only visible on nose"],
//     },
//     {
//       q: "Do you have visible pigmentation or uneven tone?",
//       type: "select",
//       options: ["Yes", "Mild", "No"],
//     },
//     {
//       q: "Do you notice fine lines or wrinkles?",
//       type: "select",
//       options: ["Yes", "Very few", "None"],
//     },
//     {
//       q: "What is your skin goal?",
//       type: "select",
//       options: ["Glowing skin", "Acne control", "Anti-aging", "Hydration"],
//     },
//     {
//       q: "Do you use exfoliants (scrubs, acids)?",
//       type: "select",
//       options: ["Yes, weekly", "Sometimes", "Never"],
//     },
//     {
//       q: "Do you experience redness or irritation?",
//       type: "select",
//       options: ["Often", "Rarely", "Never"],
//     },
//     {
//       q: "Do you live in a humid or dry environment?",
//       type: "select",
//       options: ["Humid", "Dry", "Balanced"],
//     },
//     {
//       q: "How does your skin feel mid-day?",
//       type: "select",
//       options: ["Oily", "Dry", "Normal"],
//     },
//     { q: "What skin issues bother you the most?", type: "text" },
//     {
//       q: "Do you wear makeup daily?",
//       type: "select",
//       options: ["Yes", "Sometimes", "No"],
//     },
//     {
//       q: "Do you smoke or drink regularly?",
//       type: "select",
//       options: ["Yes", "No"],
//     },
//     {
//       q: "Are you under high stress lately?",
//       type: "select",
//       options: ["Yes", "Somewhat", "No"],
//     },
//     { q: "Any allergies or known skin conditions?", type: "text" },
//   ];
//   showSection();

//   function showSection() {
//     // document
//     //   .querySelectorAll(".tool-section")
//     //   .forEach((sec) => sec.classList.add("hidden"));
//     // document.getElementById(id).classList.remove("hidden");

//     initSkinForm();
//   }
//   // initSkinForm();

//   function initSkinForm() {
//     const skinForm = document.getElementById("skinTypeForm");
//     if (!skinForm) return;

//     // Clear the form only if it's already filled
//     if (skinForm.children.length > 0) {
//       return; // If already rendered, don't re-render
//     }

//     // Insert progress bar only once
//     if (!skinForm.parentElement.contains(skinProgress)) {
//       skinForm.parentElement.insertBefore(skinProgress, skinForm);
//     }

//     // Reset tracking vars (only if user re-opened)
//     skinCurrent = 0;
//     skinAnswers.length = 0;
//     skinForm.innerHTML = ""; // Clear form in case anything remains
//     updateSkinProgress();

//     renderSkinQuestion(skinCurrent);
//   }

//   function renderSkinQuestion(i) {
//     const form = document.getElementById("skinTypeForm");
//     const { q, type, options } = skinQuestions[i];

//     const block = document.createElement("div");
//     block.className = "question-block";
//     block.dataset.question = i;

//     const label = document.createElement("label");
//     label.textContent = `${i + 1}. ${q}`;

//     let input;
//     if (type === "select") {
//       input = document.createElement("select");
//       options.forEach((opt) => {
//         const o = document.createElement("option");
//         o.value = opt;
//         o.textContent = opt;
//         input.appendChild(o);
//       });
//     } else {
//       input = document.createElement("input");
//       input.type = "text";
//       input.placeholder = "Type your answer...";
//     }

//     input.addEventListener("input", () => (skinAnswers[i] = input.value));

//     const next = document.createElement("button");
//     next.textContent = "Next";
//     next.onclick = () => {
//       skinAnswers[i] = input.value;
//       skinCurrent++;
//       updateSkinProgress();

//       if (skinCurrent < skinQuestions.length) {
//         renderSkinQuestion(skinCurrent);
//       } else {
//         showSkinSubmit();
//       }

//       next.disabled = true;
//     };

//     block.append(label, input, next);
//     form.appendChild(block);
//   }

//   function updateSkinProgress() {
//     const filled = skinAnswers.filter((a) => a).length;
//     skinProgress.textContent = `${filled}/${skinQuestions.length}`;
//     skinProgress.style.width = `${(filled / skinQuestions.length) * 100}%`;
//   }

//   function showSkinSubmit() {
//     const form = document.getElementById("skinTypeForm");
//     const box = document.createElement("div");
//     box.className = "end-buttons";

//     const submit = document.createElement("button");
//     submit.textContent = "Submit";
//     submit.type = "button";
//     submit.onclick = () => {
//       localStorage.setItem("faceSkinAnswers", JSON.stringify(skinAnswers));
//       form.innerHTML = `<p>✅ Analysis complete. Your personalized routine is on the way.</p>`;
//     };

//     const clear = document.createElement("button");
//     clear.textContent = "Clear All";
//     clear.type = "button";
//     clear.onclick = () => {
//       form.innerHTML = "";
//       skinCurrent = 0;
//       skinAnswers.length = 0;
//       updateSkinProgress();
//       renderSkinQuestion(skinCurrent);
//     };

//     box.append(submit, clear);
//     form.appendChild(box);
//   }
// }

// === index.js ===
// Handles section switching, loader, and master control

import { startDiagnosisFlow } from "./disease.js";
import { skinRoutineQS } from "./routine.js";


const progressBar = document.createElement("div");
progressBar.className = "progress-bar";

export const answers = [];
export let current = 0;

export function showSection(id, type = null) {
  const form = document.getElementById("skinForm");
  document.querySelectorAll(".tool-section").forEach((sec) => sec.classList.add("hidden"));
  document.getElementById(id).classList.remove("hidden");

  const cam = document.getElementById("camera-options");
  cam.classList.toggle("hidden", !(id === "disease" || id === "detect"));

  if (id === "details") {
    if (type === null && current === 0) {
      if (!form.parentElement.contains(progressBar)) {
        form.parentElement.insertBefore(progressBar, form);
      }
      startDiagnosisFlow();
    } else if (type === 1) {
      skinRoutineQS();
    }
  }
}

// document.addEventListener("DOMContentLoaded", () => faqCardAnimi());

document.addEventListener("DOMContentLoaded", function () {
  const hamburger = document.querySelector(".hamburger");
  const nav = document.getElementById("navLinks");

  hamburger.addEventListener("click", () => {
    nav.classList.toggle("active");
  });

  nav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      nav.classList.remove("active");
    });
  });
});
