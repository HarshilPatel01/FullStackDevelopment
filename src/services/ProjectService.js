import axios  from "axios";

const PROJECT_API_BASE_URL="http://localhost:8090/api/v1/projects";

class ProjectService{
    getProjects(){
        return axios.get(PROJECT_API_BASE_URL);
    }
}

export default ProjectService();
