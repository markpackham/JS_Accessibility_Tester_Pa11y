// Fetch accessability issues
const testAccessibility = async (e) => {
  e.preventDefault();

  const url = document.querySelector("#url").value;
  console.log(url);
};
// Add issues to the DOM

// Set loading state (spinner)

// Escape HTML (don't render the html tags)

document.querySelector("#form").addEventListener("submit", testAccessibility);
