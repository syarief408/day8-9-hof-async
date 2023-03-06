document.addEventListener("DOMContentLoaded", () => {
  inputProject.addEventListener("submit", (e) => {
    e.preventDefault();
    addProject();
    inputProject.reset();
  });
});

document.addEventListener(renderResult, () => {
  const listProject = document.getElementById("list-project");

  listProject.innerHTML = "";

  for (const project of resultData) {
    const projectItem = createProjectItem(project);
    listProject.append(projectItem);
  }
});
