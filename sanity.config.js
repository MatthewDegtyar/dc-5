import { defineConfig } from "sanity";
import {structureTool} from 'sanity/structure'
import project from './sanity/schemas/project-schemas'

const config = defineConfig({
    name: 'default',
    title: 'DC-Main',
  
    projectId: 'pazbl27w',
    dataset: 'production',  
    apiVersion:'2024-01-24',
    basePath:'/admin',
    
    plugins: [structureTool()],
    schema: { types: [project]}
})

export default config;