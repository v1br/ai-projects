<!-- Shields.io badges -->

![GitHub contributors](https://img.shields.io/github/contributors/v1br/telco-churn?style=flat-square&color=black) ![GitHub issues](https://img.shields.io/github/issues-pr/v1br/telco-churn?style=flat-square&color=black) ![GitHub issues](https://img.shields.io/github/issues/v1br/telco-churn?style=flat-square&color=black)

<!-- MAIN SECTION -->
<p align="center">
  <br />
  <h3 align="center">Telco Customer Churn</h3>
  <h5 align="center"><img src="chart.gif" height="32px"/></h5>

  <p align="center">
    A minimalistic telco customer churn predictor. 🚀<br />
    <br />
    <a href="https://telco-churn.vercel.app/">View</a>
    |
    <a href="https://github.com/v1br/telco-churn/pulls">Pulls</a>
    |
    <a href="https://github.com/v1br/telco-churn/issues">Issues</a>
    |
    <a href="https://github.com/v1br/telco-churn?tab=MIT-1-ov-file">License</a>
  </p>

  <p align="center">
    <img src="https://img.shields.io/badge/vite-292929?logo=vite&logoColor=7a81f5">
    <img src="https://img.shields.io/badge/react-292929?logo=react">
    <img src="https://img.shields.io/badge/tailwind-292929?logo=tailwindcss">
    <img src="https://img.shields.io/badge/chart-292929?logo=chartdotjs">
    <img src="https://img.shields.io/badge/zod-292929?logo=zod">
    <img src="https://img.shields.io/badge/bun-292929?logo=bun">
    <img src="https://img.shields.io/badge/eslint-292929?logo=eslint&logoColor=8181f2">
  </p>
</p>

---

This repository contains the Frontend for the project, to view the backend, visit the [Backend Repository](https://github.com/AbhinnV04/Customer_Churn_Telco), maintained by [Abhinn Verma](https://github.com/AbhinnV04). ✨

Frontend Tech Stack:
- <a href="https://vite.dev/">Vite.js</a> for building & deploying the application.
- <a href="https://react.dev/">React.js</a> for handling transitions & components.
- <a href="https://tailwindcss.com/">Tailwind</a> for adding styles to the application.
- <a href="https://www.chartjs.org/">Chart.js</a> for rendering dynamic charts and figures.
- <a href="https://www.chartjs.org/">Zod</a> for form validation & XSS security.

Additional Dev Tools:
- <a href="https://bun.sh/">Bun</a> for testing, bundling & managing dependencies.
- <a href="https://eslint.org/">ESLint</a> for improving overall code quality.

This project is [LIVE](https://telco-churn.vercel.app/) with the help of [Vercel](https://vercel.com/docs) & [Render](https://render.com/)! 🥂

---

📂 <ins>Running the project locally</ins>

First, clone & prepare the Frontend repository.
```bash
git clone https://github.com/v1br/telco-churn.git telco-front
cd telco-front/web
bun install
```

<br />

Then, clone & prepare the Backend repository.
```bash
git clone git@github.com:AbhinnV04/Customer_Churn_Telco.git telco-back
cd telco-back
python -m venv venv
venv\Scripts\activate # on windows only
source venv/bin/activate # on macos & linux only
pip install -r requirements.txt
```

<br />

Update the `env` in both repositories.
- Set telco-front/web/.env to track backend URL.
- Set telco-back/.env to track frontend URL.

<br />

Finally, run the development environments for both.
```bash
bun run dev # inside telco-front/web
fastapi dev main.py # inside telco-back
```


<!-- [You can also test the project online.]() -->

---

💻 <ins>Contributing to the project</ins>

To contribute to the Frontend repository, follow these steps.

```bash
# [ fork the repository ]
git clone https://github.com/user/telco-churn.git && cd telco-churn
git branch -b new-feature
cd web && bun install
# [ apply your changes ]
bun run lint
# [ fix lint errors ]
git add changes
git commit -m "meaningful message"
git push origin new-feature
# [ create a pull request ]
```

> [!IMPORTANT]
> [Please follow conventional commits.](https://www.conventionalcommits.org/en/v1.0.0/)

---

<p align="center">🥕🐇</p>