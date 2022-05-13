import { Project, Education, WorkExperience } from '../models'
import { createStore } from 'vuex'
import data from "../assets/data.json"


export default createStore({
	state: {},
	mutations: {
		SET_PROJECTS(state: any, projects: Array<Project>): void {
			state.projects = projects;
		},
		SET_EDUCATIONS(state: any, educations: Array<Education>): void {
			state.educations = educations;
		},
		SET_WORKEXPERIENCES(state: any, workexperiences: Array<WorkExperience>): void {
			state.workexperiences = workexperiences;
		},
	},
	actions: {
		init({commit}: any) {
			commit("SET_PROJECTS", data.projects);
			commit("SET_EDUCATIONS", data.educations);
			commit("SET_WORKEXPERIENCES", data.workexperiences);
		},
	},
	getters: {
		projects(state: any): Array<Project> {
			return data.projects;
		},
		getProjectById(state: any): Function {
			return (id: Number)=>data.projects.find(project=>project.id == id) as Project;
		}, 
		educations(state: any): Array<Education> {
			return data.educations;
		},
		workexperiences(state: any): Array<WorkExperience> {
			return data.workexperiences;
		},
	},
	modules: {}
})
