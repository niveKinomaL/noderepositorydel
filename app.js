const request = require("superagent");

const username = "niveKinomaL";
const token = "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";

async function deleteRepo(repoName) {
  try {
    const response = await request
      .delete(`https://api.github.com/repos/${username}/${repoName}`)
      .set("Authorization", `Bearer ${token}`)
      .set("User-Agent", "SuperAgent");

    if (response.status === 204) {
      console.log(`Repository '${repoName}' deleted successfully.`);
    } else {
      console.log(`Error deleting repository '${repoName}'.`);
      console.log(response.body);
    }
  } catch (error) {
    console.log(`An error occurred while deleting repository '${repoName}'.`);
    console.log(error);
  }
}

deleteRepo("Update-0.1-Kevin-L.-Kernel");
