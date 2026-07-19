// Injects the shared sidebar into every page.
// Each <body> should have data-page="pageid" to highlight the active link.

const NAV = `
<div class="sidebar-ekko">
  <img src="ekko.png" alt="Ekko" onerror="this.style.display='none'" />
  <p class="ekko-quote">"It's not how much time you have,<br/>it's how you use it."</p>
  <p class="ekko-attr">— Ekko, League of Legends</p>
</div>
<div class="sidebar-info">
  <h1 class="sidebar-name">Aadithya Iyer</h1>
  <p class="sidebar-title">Graduate Student</p>
  <p class="sidebar-affil">Dept. of Computational &amp; Data Sciences</p>
  <p class="sidebar-affil">Indian Institute of Science, Bangalore</p>
</div>
<div class="sidebar-contact">
  <a href="mailto:aadithyaiyer@iisc.ac.in">aadithyaiyer@iisc.ac.in</a>
  <a href="https://github.com/ExusBurn" target="_blank" rel="noopener">GitHub &rarr;</a>
</div>
<nav class="sidebar-nav">
  <a href="index.html" data-id="about">About Me</a>
  <a href="research.html" data-id="research">Research Interests</a>

  <span class="nav-section-label">Experience</span>
  <a href="mastercard.html" data-id="mastercard" class="nav-sub">Mastercard Internship</a>

  <span class="nav-section-label">Research &amp; Projects</span>
  <a href="kqd.html" data-id="kqd" class="nav-sub">Krylov Quantum Diagonalization</a>
  <a href="lchs.html" data-id="lchs" class="nav-sub">Quantum Heat Equation (LCHS)</a>
  <a href="ml.html" data-id="ml" class="nav-sub">Machine Learning &amp; Neural Nets</a>
  <a href="robotics.html" data-id="robotics" class="nav-sub">Robotics &amp; CVIP 2024</a>

  <span class="nav-section-label">IISc Coursework</span>
  <a href="iisc-sem1.html" data-id="sem1" class="nav-sub">First Semester</a>
  <a href="iisc-sem2.html" data-id="sem2" class="nav-sub">Second Semester</a>

  <span class="nav-section-label">More</span>
  <a href="cv.html" data-id="cv">CV</a>
  <a href="gate.html" data-id="gate">GATE Preparation</a>
  <a href="youtube.html" data-id="youtube">YouTube &amp; Fun</a>
</nav>
`;

document.addEventListener('DOMContentLoaded', () => {
  const sidebar = document.querySelector('.sidebar');
  if (sidebar) {
    sidebar.innerHTML = NAV;
    const page = document.body.dataset.page;
    if (page) {
      const active = sidebar.querySelector(`[data-id="${page}"]`);
      if (active) active.classList.add('active');
    }
  }

  // Scroll-spy for single-page sections
  const sections = document.querySelectorAll('section[id]');
  if (sections.length > 1) {
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          document.querySelectorAll('.sidebar-nav a').forEach(a => a.classList.remove('active'));
          const a = document.querySelector(`.sidebar-nav a[href="#${e.target.id}"]`);
          if (a) a.classList.add('active');
        }
      });
    }, { rootMargin: '-40% 0px -55% 0px' });
    sections.forEach(s => obs.observe(s));
  }
});
