import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import schemas from "./sanity-schemas/schemas";

const config = defineConfig({
    projectId:"rw69g7b2",
    dataset: "production",
    title: "Portfolio Next Sanity Website",
    apiVersion: "2023-03-04",
    basePath: "/admin", // This is where sanity studio will live like wordpress we can do /admin
    plugins: [deskTool()], // desktool is for top level view and is needed to view our studio
    schema: { types: schemas },
    useCdn: true,
})

export default config;