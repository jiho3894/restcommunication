import Swal from "sweetalert2";

export const useSweet = (timer, icon, title) => {
  Swal.mixin({
    toast: true,
    position: "top",
    showConfirmButton: false,
    timer,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener("mouseenter", Swal.stopTimer);
      toast.addEventListener("mouseleave", Swal.resumeTimer);
    },
  }).fire({
    icon,
    title,
  });
};
