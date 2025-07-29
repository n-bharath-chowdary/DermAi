# 🧠 DermaI - Your AI-Powered Dermatology Assistant

![MIT License](https://img.shields.io/badge/License-MIT-green.svg)
![Build](https://img.shields.io/badge/Build-Stable-brightgreen)
![Tech-Stack](https://img.shields.io/badge/Tech-Python%20%7C%20Flask%20%7C%20ML-blue)
![Contributions](https://img.shields.io/badge/Contributions-Welcome-orange)
![Status](https://img.shields.io/badge/Status-Alpha-red)

> Diagnose skin conditions accurately with just a few questions and optional image inputs – designed for accessibility, speed, and reliability.

---

## 🧬 What is DermaI?

**DermaI** is a smart dermatology assistant that can predict skin conditions using:
- A user-friendly **Q&A-based form**
- Optional **skin image uploads**
- Powerful AI trained on dermatologist-verified datasets

Ideal for early screening, personal use, and low-resource settings where dermatologists aren't readily available.

---

## 🧩 Features

✅ Q&A-based skin diagnosis  
✅ Optional image-based inference (multi-modal AI)  
✅ Dynamic condition suggestion  
✅ Simple, mobile-friendly frontend  
✅ Scalable Python + Flask backend  
✅ Extensible for multi-language support

---

## 📥 Data Collection Form (Frontend Inputs)

| Field Name           | Question Prompt                                 | Required |
|----------------------|--------------------------------------------------|----------|
| `age_bucket`         | Age                                              | ✅       |
| `sex_at_birth`       | Sex at birth                                     | ✅       |
| `skin_type`          | How does your skin react to ...                 | ✅       |
| `race_ethnicity`     | With which racial or ethnic group do you identify? | ✅    |
| `textures`           | Describe how the affected area feels/looks       | ✅       |
| `body_parts`         | Where on your body is the issue?                 | ✅       |
| `condition_symptoms` | Are you experiencing any of the following?       | ✅       |
| `other_symptoms`     | Do you have any of these symptoms?               | ✅       |
| `related_category`   | Which category best fits your condition?         | ✅       |
| `condition_duration` | For how long have you had the issue?             | ✅       |
| `image_*_shot_type`  | Upload 3 images of the affected skin area        | ⛔ Optional |

---

## 🧠 Model Behavior

- 📊 **Trained on:** SCIN dataset with Q&A + image pairings  
- 🧮 **Prediction Mode:** Uses only Q&A at minimum. Images are optional.  
- 🏗️ **Pipeline:**  
  1. Input → Feature Engineering  
  2. Embedding & Model Inference  
  3. Diagnosis Output + Confidence Score

---

## 🚀 Tech Stack

| Layer        | Tech Used                     |
|--------------|-------------------------------|
| Frontend     | HTML, CSS, JavaScript         |
| Backend      | Python (Flask)                |
| ML Models    | Scikit-learn / PyTorch / TensorFlow (custom trained) |
| Storage      | Firebase / MySQL (flexible)   |
| Hosting      | Render / GitHub Pages         |

---

## 📸 Sample UI Screens

<img src="src/img/Screenshot 2025-07-29 103625.png" height="600" weight="600"/>
<img src="src/img/Screenshot 2025-07-29 103638.png" height="600" weight="600"/>
<img src="src/img/Screenshot 2025-07-29 103714.png" height="600" weight="600"/>
<img src="src/img/Screenshot 2025-07-29 103722.png" height="600" weight="600"/>
<img src="src/img/Screenshot 2025-07-29 103743.png" height="600" weight="600"/>
<img src="src/img/Screenshot 2025-07-29 103806.png" height="600" weight="600"/>
<img src="src/img/Screenshot 2025-07-29 103824.png" height="600" weight="600"/>
<img src="src/img/Screenshot 2025-07-29 103836.png" height="600" weight="600"/>

---

## 🔧 Setup & Run

```bash
git clone https://github.com/yourusername/dermai
cd dermai
pip install -r requirements.txt
python app.py

```


---
## 📜 License
This project is licensed under the MIT License — see the LICENSE file for details.

---
## 🧑‍💻 Author & Maintainer
👨‍💻 Bharath – @n-bharath-chowdary
Drop a star ⭐ on the repo if you like it!

---
## 🙌 Acknowledgements
SCIN Dataset creators 🙏

Open-source libraries powering this system

Every person who helped test or validate!

---
## 🌟 What’s Coming Next?
🗣️ Voice-assisted input

🌍 Multi-language support

🧬 Condition history tracking

📊 Admin dashboard for professionals

---
## 💬 Want to contribute?
PRs are welcome! Fork it, improve it, and let’s revolutionize skincare together.

Wanna add some spice with a custom badge like `Made with ❤️ by Kiddosphere` or `AI Inside™`? I can generate SVGs too.

Let me know if you'd like this converted to Markdown+HTML for GitHub Pages rendering, or if you want a lightweight hosted preview of this readme layout.

---
## 🙋‍♂️ Author
#### Bharath Chowdary
##### [GitHub](https://github.com/n-bharath-chowdary) 
##### [LinkedIn](https://www.linkedin.com/in/n-bharath-chowdary/)
