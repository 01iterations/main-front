
export type CourseModuleType = {
    moduleName: string,
    moduleNumber: number,
    moduleType: "img" | "cards",
    moduleItems: string[],
    sources: string[],
    lastModule: boolean
}

export type CourseType = {
    name: string,
    Intro: {
        src: string,
        intro: string
    },
    modules: CourseModuleType[],
    prerequisites: string[],
    deliverable: string,
    participantsWork?: string[],
    feedback?: FeedBackType[],
    link?: string,
    price: string;
    currency: string;
}