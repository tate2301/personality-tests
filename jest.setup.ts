import "@testing-library/jest-dom";
jest.mock("next/navigation", () => require("next-router-mock"));

class ResizeObserver {
  observe() {}
  unobserve() {}
  disconnect() {}
}

window.ResizeObserver = ResizeObserver;
