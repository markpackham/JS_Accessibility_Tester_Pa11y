// Fetch accessability issues
const testAccessibility = async (e) => {
  e.preventDefault();

  const url = document.querySelector("#url").value;
  if (url === "") {
    alert("Please add a url");
  } else {
    setLoading();

    const response = await fetch(`/api/test?url=${url}`);

    if (response.status !== 200) {
      setLoading(false);
      alert("Something went wrong");
    } else {
      // issues part taken from "data"
      const { issues } = await response.json();
      addIssuesToDOM(issues);
      setLoading(false);
    }
  }
};
// Add issues to the DOM
const addIssuesToDOM = (issues) => {
  const issuesOutput = document.querySelector("#issues");
  issuesOutput.innerHTML = "";

  if (issues.length === 0) {
    issuesOutput.innerHTML = "<h4>No issues found</h4>";
  } else {
  }
};

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

//Clear results

document.querySelector("#form").addEventListener("submit", testAccessibility);
