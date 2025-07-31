// ui.js — Common UI helpers used in disease.js and routine.js

// export function createProgressBar() {
//   const bar = document.createElement("div");
//   bar.className = "progress-bar";
//   return bar;
// }

// export function updateProgressBar(progressBar, current, total) {
//   progressBar.textContent = `${current}/${total}`;
//   progressBar.style.width = `${(current / total) * 100}%`;
// }

// export function createQuestionBlock(q, index, type, options = [], callback) {
//   const wrapper = document.createElement("div");
//   wrapper.className = "question-block";
//   wrapper.dataset.question = index;

//   const label = document.createElement("label");
//   label.textContent = `${index + 1}. ${q}`;
//   wrapper.appendChild(label);

//   let input;
//   if (type === "select") {
//     input = document.createElement("select");
//     options.forEach((opt) => {
//       const o = document.createElement("option");
//       o.value = opt;
//       o.textContent = opt;
//       input.appendChild(o);
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

//       const span = document.createElement("span");
//       span.textContent = opt;

//       checkboxWrapper.appendChild(span);
//       checkboxWrapper.appendChild(checkbox);
//       input.appendChild(checkboxWrapper);
//     });
//   } else {
//     input = document.createElement("input");
//     input.type = "text";
//     input.placeholder = "Type your answer...";
//   }

//   const nextBtn = document.createElement("button");
//   nextBtn.textContent = "Next";
//   nextBtn.type = "button";
//   nextBtn.className = "next-btn";

//   nextBtn.onclick = () => {
//     let value;
//     if (type === "multi-select") {
//       value = [...input.querySelectorAll("input:checked")].map(
//         (cb) => cb.value
//       );
//     } else {
//       value = input.value;
//     }

//     if (callback) callback(value);
//     nextBtn.disabled = true;
//   };

//   if (type !== "multi-select") {
//     input.addEventListener("input", () => {
//       nextBtn.disabled = false;
//     });
//   }

//   wrapper.appendChild(input);
//   wrapper.appendChild(nextBtn);

//   return wrapper;
// }

// export function showEndButtons(onSubmit, onClear) {
//   const box = document.createElement("div");
//   box.className = "end-buttons";

//   const submit = document.createElement("button");
//   submit.textContent = "Submit";
//   submit.onclick = onSubmit;

//   const clear = document.createElement("button");
//   clear.textContent = "Clear All";
//   clear.onclick = onClear;

//   box.append(submit, clear);
//   return box;
// }

// function toggleMenu() {
//   const nav = document.querySelector('.nav-container');
//   nav.classList.toggle('active');
// }

document.addEventListener("DOMContentLoaded", function () {
  const faqCards = document.querySelectorAll(".faq-card");

  // Open the first card by default
  faqCards[0].classList.add("active");

  faqCards.forEach((card) => {
    const question = card.querySelector(".faq-question");

    question.addEventListener("click", () => {
      // Close all cards
      faqCards.forEach((c) => {
        if (c !== card) c.classList.remove("active");
      });

      // Toggle current card
      card.classList.toggle("active");
    });
  });
});
