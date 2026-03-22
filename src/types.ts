export interface Project {
    slug: string;
    title: string;
    description: string;
    category: string;
    tags: string[];
    url?: string;
    repo?: string;
    image?: string;
    featured?: boolean;
    date?: string;
    role?: string;
}
