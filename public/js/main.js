// Fetch accessability issues
const testAccessibility = async (e) => {
  e.preventDefault();

  const url = document.querySelector("#url").value;
  if (url === "") {
    alert("Please add a url");
  } else {
    setLoading();
  }
};
// Add issues to the DOM

// Set loading state (spinner)
const setLoading = (isLoading = true) => {
  const loader = document.querySelector(".loader");
  if (isLoading) {
    loader.style.display = "block";
  } else {
    loader.style.display = "none";
  }
};

// Escape HTML (don't render the html tags)

document.querySelector("#form").addEventListener("submit", testAccessibility);
