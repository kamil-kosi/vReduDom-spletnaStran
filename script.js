{\rtf1\ansi\ansicpg1252\cocoartf2822
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fswiss\fcharset0 Helvetica;}
{\colortbl;\red255\green255\blue255;}
{\*\expandedcolortbl;;}
\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\pard\tx566\tx1133\tx1700\tx2267\tx2834\tx3401\tx3968\tx4535\tx5102\tx5669\tx6236\tx6803\pardirnatural\partightenfactor0

\f0\fs24 \cf0 // Smooth scrolling\
document.querySelectorAll('a[href^="#"]').forEach(anchor => \{\
  anchor.addEventListener('click', function (e) \{\
    e.preventDefault();\
    const target = document.querySelector(this.getAttribute('href'));\
    if (target) \{\
      target.scrollIntoView(\{\
        behavior: 'smooth'\
      \});\
    \}\
  \});\
\});\
\
// Form submission (optional basic JS)\
document.getElementById('contact-form').addEventListener('submit', function(e) \{\
  e.preventDefault();\
  alert("Hvala za va\'9ae sporo\uc0\u269 ilo! Odgovorili vam bomo v najkraj\'9aem mo\'9enem \u269 asu.");\
  this.reset();\
\});\
}
