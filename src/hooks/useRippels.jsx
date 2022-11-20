import $ from "jquery";
import "jquery.ripples";
const useRippels = (className) => {
  $(className).ripples({
    resolution: 512,
    dropRadius: 20,
    perturbance: 0.04,
  });
};

export default useRippels;
