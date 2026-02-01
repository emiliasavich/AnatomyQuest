// // // document.addEventListener("DOMContentLoaded", function () {
// // //   const isMobile = () => window.innerWidth <= 768;
// // //   let activePopups = [];

// // //   // Position and style a popup, based on term and stack
// // //   function positionPopup(term, popup) {
// // //     let top, left;

// // //     if (activePopups.length > 0) {
// // //       // Place on top of previous popup
// // //       const lastPopup = activePopups[activePopups.length - 1];
// // //       top = lastPopup.top;             // same vertical position
// // //       left = lastPopup.left;           // horizontally offset from last popup
// // //     } else {
// // //       const rect = term.getBoundingClientRect();
// // //       top = rect.top + window.scrollY;
// // //       left = rect.right + 4;           // small spacing
// // //     }

// // //     popup.style.position = "absolute";
// // //     popup.style.top = top + "px";
// // //     popup.style.left = left + "px";
// // //     popup.style.bottom = "auto";
// // //     popup.style.zIndex = 1000 + activePopups.length; // make topmost visible

// // //     // Save positioning for stacking next popup
// // //     activePopups.push({
// // //       term,
// // //       popup,
// // //       overlay: document.getElementById(popup.id + "-overlay"),
// // //       top,
// // //       right: left + popup.offsetWidth,
// // //       left: left
// // //     });
// // //   }

// // //   function showPopup(term, popup, overlay) {
// // //     // Mobile: hide all first
// // //     // if (isMobile()) {
// // //     //   document.querySelectorAll(".popup-overlay").forEach(p => p.classList.remove("active"));
// // //     //   document.querySelectorAll(".popup-content").forEach(p => p.classList.remove("active"));
// // //     //   activePopups = [];
// // //     // }



// // //     // Only add click handler if the popup wasn't already active
// // //     if (!popup.classList.contains("active")) {
// // //       popup.addEventListener("click", (e) => {
// // //         if (isDrag(e)) return;
// // //         e.stopPropagation();
// // //         hideTopPopup();
// // //       });

// // //       overlay.addEventListener("click", (e) => {
// // //         if (isDrag(e)) return;
// // //         e.stopPropagation();
// // //         hidePopups();
// // //       });
// // //     }

// // //     // overlay.classList.add("active");
// // //     popup.classList.add("active");

// // //     // Always position popup
// // //     positionPopup(term, popup);
// // //   }

// // //   function hideTopPopup() {
// // //     if (activePopups.length === 0) return;
// // //     const top = activePopups.pop();
// // //     top.popup.classList.remove("active");
// // //     top.overlay.classList.remove("active");
// // //   }

// // //   function hidePopups() {
// // //     activePopups.forEach(p => {
// // //       p.popup.classList.remove("active");
// // //       p.overlay.classList.remove("active");
// // //     });
// // //     activePopups = [];
// // //     // alert('in hide popups');
// // //   }

// // //   // Bind click events to all terms
// // //   document.querySelectorAll(".popup-term").forEach(term => {
// // //     const popupId = term.dataset.popupId;
// // //     const popup = document.getElementById(popupId);
// // //     const overlay = document.getElementById(popupId + '-overlay');
// // //     if (!popup || !overlay) return;

// // //    let hoverTimeout = null;
// // // let hideTimeout = null;

// // // // Show popup after hover
// // // term.addEventListener("mouseenter", () => {
// // //   clearTimeout(hideTimeout); // cancel any scheduled hide
// // //   hoverTimeout = setTimeout(() => {
// // //     showPopup(term, popup, overlay);
// // //   }, 500); // 1.5s delay
// // // });

// // // // Schedule hide when leaving term
// // // term.addEventListener("mouseleave", () => {
// // //   console.log('leave term');
// // //   clearTimeout(hoverTimeout);
// // //   hoverTimeout = null;

// // //   // Only hide after a short delay if mouse is not over popup
// // //   hideTimeout = setTimeout(() => {
// // //     if (!popup.matches(':hover')) {
// // //       hidePopups();
// // //     }
// // //   }, 500); // 0.5s delay before hiding
// // // });

// // // // Schedule hide when leaving popup
// // // popup.addEventListener("mouseleave", () => {
// // //   console.log('leave popup');

// // //   // Only hide after a short delay if mouse is not over term
// // //   hideTimeout = setTimeout(() => {
// // //     if (!term.matches(':hover')) {
// // //       hidePopups();
// // //     }
// // //   }, 500);
// // // });

// // // // Cancel hide if mouse enters popup
// // // popup.addEventListener("mouseenter", () => {
// // //   clearTimeout(hideTimeout);
// // // });

// // //     // Handle window resize
// // //     window.addEventListener("resize", () => {
// // //       if (!isMobile()) {
// // //         activePopups.forEach(p => positionPopup(p.term, p.popup));
// // //       } else {
// // //         // Mobile: snap to bottom
// // //         activePopups.forEach(p => {
// // //           p.popup.style.position = "fixed";
// // //           p.popup.style.bottom = "0";
// // //           p.popup.style.left = "0";
// // //           p.popup.style.top = "auto";
// // //           p.popup.style.width = "100%";
// // //           p.popup.style.maxWidth = "100%";
// // //         });
// // //       }
// // //     });
// // //   });
// // // });

// // document.addEventListener("DOMContentLoaded", function () {
// //   const isMobile = () => window.innerWidth <= 768;
// //   let activePopups = [];

// //   // Position popup intelligently
// //   function positionPopup(term, popup) {
// //     const termRect = term.getBoundingClientRect();
// //     const popupRect = popup.getBoundingClientRect();
// //     const viewportWidth = window.innerWidth;
// //     const viewportHeight = window.innerHeight;

// //     let top = termRect.top + window.scrollY;
// //     let left = termRect.right + 4; // default to the right

// //     // If there are other active popups, stack them slightly offset
// //     if (activePopups.length > 0) {
// //       const last = activePopups[activePopups.length - 1];
// //       top = last.top;
// //       left = last.left + last.popup.offsetWidth + 8; // horizontal offset
// //     }

// //     // Check for right overflow
// //     if (left + popup.offsetWidth > viewportWidth) {
// //       left = termRect.left - popup.offsetWidth - 4; // try left
// //     }

// //     // Check for bottom overflow
// //     if (top + popup.offsetHeight > viewportHeight + window.scrollY) {
// //       top = viewportHeight + window.scrollY - popup.offsetHeight - 4; // shift up
// //     }

// //     // If top goes above viewport, clamp it
// //     if (top < window.scrollY + 4) {
// //       top = window.scrollY + 4;
// //     }

// //     popup.style.position = "absolute";
// //     popup.style.top = top + "px";
// //     popup.style.left = left + "px";
// //     popup.style.bottom = "auto";
// //     popup.style.zIndex = 1000 + activePopups.length;

// //     activePopups.push({ term, popup, overlay: document.getElementById(popup.id + "-overlay"), top, left });
// //   }

// //   function showPopup(term, popup, overlay) {
// //     if (!popup.classList.contains("active")) {
// //       popup.addEventListener("click", (e) => {
// //         if (isDrag(e)) return;
// //         e.stopPropagation();
// //         hideTopPopup();
// //       });
// //       overlay.addEventListener("click", (e) => {
// //         if (isDrag(e)) return;
// //         e.stopPropagation();
// //         hidePopups();
// //       });
// //     }

// //     popup.classList.add("active");
// //     positionPopup(term, popup);
// //   }

// //   function hideTopPopup() {
// //     if (activePopups.length === 0) return;
// //     const top = activePopups.pop();
// //     top.popup.classList.remove("active");
// //     top.overlay.classList.remove("active");
// //   }

// //   function hidePopups() {
// //     activePopups.forEach(p => {
// //       p.popup.classList.remove("active");
// //       p.overlay.classList.remove("active");
// //     });
// //     activePopups = [];
// //   }

// //   document.querySelectorAll(".popup-term").forEach(term => {
// //     const popupId = term.dataset.popupId;
// //     const popup = document.getElementById(popupId);
// //     const overlay = document.getElementById(popupId + '-overlay');
// //     if (!popup || !overlay) return;

// //     let hoverTimeout = null;
// //     let hideTimeout = null;

// //     term.addEventListener("mouseenter", () => {
// //       clearTimeout(hideTimeout);
// //       hoverTimeout = setTimeout(() => {
// //         showPopup(term, popup, overlay);
// //       }, 1500); // hover delay
// //     });

// //     term.addEventListener("mouseleave", () => {
// //       clearTimeout(hoverTimeout);
// //       hoverTimeout = null;

// //       hideTimeout = setTimeout(() => {
// //         if (!popup.matches(':hover')) hidePopups();
// //       }, 500);
// //     });

// //     popup.addEventListener("mouseenter", () => {
// //       clearTimeout(hideTimeout);
// //     });

// //     popup.addEventListener("mouseleave", () => {
// //       hideTimeout = setTimeout(() => {
// //         if (!term.matches(':hover')) hidePopups();
// //       }, 500);
// //     });
// //   });

// //   // Reposition on window resize
// //   window.addEventListener("resize", () => {
// //     if (!isMobile()) {
// //       activePopups.forEach(p => positionPopup(p.term, p.popup));
// //     } else {
// //       activePopups.forEach(p => {
// //         p.popup.style.position = "fixed";
// //         p.popup.style.bottom = "0";
// //         p.popup.style.left = "0";
// //         p.popup.style.top = "auto";
// //         p.popup.style.width = "100%";
// //         p.popup.style.maxWidth = "100%";
// //       });
// //     }
// //   });
// // });

// document.addEventListener("DOMContentLoaded", function () {
//   const isMobile = () => window.innerWidth <= 768;
//   let activePopups = [];

//   // Position popup intelligently relative to the term
//   function positionPopup(term, popup) {
//     const termRect = term.getBoundingClientRect();
//     const popupRect = popup.getBoundingClientRect();
//     const viewportWidth = window.innerWidth;
//     const viewportHeight = window.innerHeight;

//     let top = termRect.top + window.scrollY;
//     let left = termRect.right + 4; // default to the right

//     // If not enough space to the right, try left
//     if (left + popup.offsetWidth > viewportWidth) {
//       left = termRect.left - popup.offsetWidth - 4;
//     }

//     // If still overflows vertically, try below or above
//     if (top + popup.offsetHeight > viewportHeight + window.scrollY) {
//       top = viewportHeight + window.scrollY - popup.offsetHeight - 4;
//     }
//     if (top < window.scrollY + 4) {
//       top = window.scrollY + 4;
//     }

//     popup.style.position = "absolute";
//     popup.style.top = top + "px";
//     popup.style.left = left + "px";
//     popup.style.bottom = "auto";
//     popup.style.zIndex = 1000 + activePopups.length;

//     // Save for tracking active popups
//     activePopups.push({
//       term,
//       popup,
//       overlay: document.getElementById(popup.id + "-overlay"),
//       top,
//       left
//     });
//   }

//   function showPopup(term, popup, overlay) {
//     if (!popup.classList.contains("active")) {
//       popup.addEventListener("click", (e) => {
//         if (isDrag(e)) return;
//         e.stopPropagation();
//         hideTopPopup();
//       });
//       overlay.addEventListener("click", (e) => {
//         if (isDrag(e)) return;
//         e.stopPropagation();
//         hidePopups();
//       });
//     }

//     popup.classList.add("active");
//     positionPopup(term, popup);
//   }

//   function hideTopPopup() {
//     if (activePopups.length === 0) return;
//     const top = activePopups.pop();
//     top.popup.classList.remove("active");
//     top.overlay.classList.remove("active");
//   }

//   function hidePopups() {
//     activePopups.forEach(p => {
//       p.popup.classList.remove("active");
//       p.overlay.classList.remove("active");
//     });
//     activePopups = [];
//   }

//   const hoveredElements = new Set();
//   let hoveredElement = null; // the element the mouse is currently over

//   document.querySelectorAll(".popup-term").forEach(term => {
//     const popupId = term.dataset.popupId;
//     const popup = document.getElementById(popupId);
//     const overlay = document.getElementById(popupId + '-overlay');
//     if (!popup || !overlay) return;

//     let hoverTimeout = null;
//     let hideTimeout = null;

//     term.addEventListener("mouseenter", () => {
//       hoveredElements.add(term);           // mark term as hovered
//       clearTimeout(hideTimeout);
//       hoverTimeout = setTimeout(() => {
//         showPopup(term, popup, overlay);
//       }, 500);
//     });

//     term.addEventListener("mouseleave", () => {
//       hoveredElements.delete(term);        // mark term as no longer hovered
//       clearTimeout(hoverTimeout);
//       hoverTimeout = null;

//       hideTimeout = setTimeout(() => {
//         if (hoveredElements.size === 0) {
//           hidePopups();                     // hide all popups if none hovered
//         }
//       }, 300);
//     });

//     popup.addEventListener("mouseenter", () => {
//       hoveredElements.add(popup);          // mark popup as hovered
//       clearTimeout(hideTimeout);
//     });

//     popup.addEventListener("mouseleave", () => {
//       hoveredElements.delete(popup);       // mark popup as no longer hovered
//       console.log(hoveredElements);
//       hideTimeout = setTimeout(() => {
//         if (hoveredElements.size === 0) {
//           hidePopups();
//         }
//       }, 300);
//     });
//   });


//   // Reposition on window resize
//   window.addEventListener("resize", () => {
//     if (!isMobile()) {
//       activePopups.forEach(p => positionPopup(p.term, p.popup));
//     } else {
//       activePopups.forEach(p => {
//         p.popup.style.position = "fixed";
//         p.popup.style.bottom = "0";
//         p.popup.style.left = "0";
//         p.popup.style.top = "auto";
//         p.popup.style.width = "100%";
//         p.popup.style.maxWidth = "100%";
//       });
//     }
//   });
// });

document.addEventListener("DOMContentLoaded", () => {
  const isMobile = () => window.innerWidth <= 768;
  let activePopups = [];

  // Position popup relative to its term
  function positionPopup(term, popup) {
    const rect = term.getBoundingClientRect();
    const popupRect = popup.getBoundingClientRect();

    let top = rect.top + window.scrollY;
    let left = rect.right + 4; // default: right side

    // Check if there's enough space to the right
    if (left + popupRect.width > window.innerWidth) {
      // Not enough space → try left
      left = rect.left - popupRect.width - 4;
    }

    // If still offscreen, clamp
    if (left < 0) left = 4;
    if (top + popupRect.height > window.scrollY + window.innerHeight) {
      top = window.scrollY + window.innerHeight - popupRect.height - 4;
    }

    popup.style.position = "absolute";
    popup.style.top = top + "px";
    popup.style.left = left + "px";
    popup.style.zIndex = 1000 + activePopups.length;
  }

  // Show popup
  function showPopup(term, popup, overlay) {
    if (popup.classList.contains("active")) return;

    popup.classList.add("active");
    // overlay.classList.add("active");

    positionPopup(term, popup);

    activePopups.push({ term, popup, overlay });
  }

  // Hide popups from a given index (0 = all)
  function hidePopups(startIndex = 0) {
    for (let i = startIndex; i < activePopups.length; i++) {
      const p = activePopups[i];
      p.popup.classList.remove("active");
      p.overlay.classList.remove("active");
    }
    activePopups = activePopups.slice(0, startIndex);
  }

  // Bind hover events to terms
  document.querySelectorAll(".popup-term").forEach(term => {
    const popupId = term.dataset.popupId;
    const popup = document.getElementById(popupId);
    const overlay = document.getElementById(popupId + '-overlay');
    if (!popup || !overlay) return;

    let hoverTimeout = null;
    let hideTimeout = null;

    function scheduleShow() {
      hoverTimeout = setTimeout(() => {
        showPopup(term, popup, overlay);
      }, 500); // hover delay
    }

    function scheduleHide(event) {
      hideTimeout = setTimeout(() => {
        var el = document.elementFromPoint(event.clientX, event.clientY);

        if (
          !el ||
          (!el.classList.contains("popup-term") &&
            !el.classList.contains("popup-content") &&
            !el.closest(".popup-content"))
        ) {
          // Mouse is outside any term or popup → hide everything
          hidePopups();
        } else if (el.classList.contains("popup-content") || el.closest(".popup-content")) {
          if (!el.classList.contains("popup-content")) {
            el = el.closest(".popup-content");
          }
          // Mouse is over a lower popup → close superior popups
          const idx = activePopups.findIndex(p => p.popup.id === el.id);
          if (idx !== -1) hidePopups(idx + 1);
        }
        // If over a term, keep stack as is
      }, 300); // delay before hiding
    }

    // Hover events
    term.addEventListener("mouseenter", () => {
      clearTimeout(hideTimeout);
      scheduleShow();
    });

    term.addEventListener("mouseleave", (event) => {
      clearTimeout(hoverTimeout);
      scheduleHide(event);
    });

    popup.addEventListener("mouseenter", () => {
      clearTimeout(hideTimeout);
    });

    popup.addEventListener("mouseleave", (event) => {
      scheduleHide(event);
    });
  });

  // Reposition popups on resize
  window.addEventListener("resize", () => {
    if (!isMobile()) {
      activePopups.forEach(p => positionPopup(p.term, p.popup));
    } else {
      // Mobile: snap to bottom full-width
      activePopups.forEach(p => {
        p.popup.style.position = "fixed";
        p.popup.style.bottom = "0";
        p.popup.style.left = "0";
        p.popup.style.top = "auto";
        p.popup.style.width = "100%";
        p.popup.style.maxWidth = "100%";
      });
    }
  });
});
