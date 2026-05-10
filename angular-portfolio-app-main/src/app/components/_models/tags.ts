
export class Tag {
    static readonly ANGULAR = new Tag('Angular', '#5a7581');
    static readonly POSTGRESQL = new Tag('PostgreSQL', '#355158')
    static readonly SQL = new Tag('SQL', '#355158');
    static readonly PYTHON = new Tag('Python', '#4a6a77');
    static readonly RESTAPI = new Tag('Rest API', '#355158');
    static readonly POSTMAN = new Tag('Postman', '#355158');
    static readonly TYPESCRIPT = new Tag('Typescript', '#192129');
    static readonly JAVASCRIPT = new Tag('Javascript', '#192129');
    static readonly HTML5 = new Tag('HTML5', '#192129');
    static readonly CSS3 = new Tag('CSS3', '#192129');
    static readonly BOOTSTRAP = new Tag('Bootstrap', '#192129');
    static readonly SQLITE = new Tag('SQLite', '#355158');
    static readonly NODEJS = new Tag('Node.js', '#457189');
    static readonly MONGODB = new Tag('MongoDB', '#457189');
    static readonly EXPRESS = new Tag('Express', '#457189');
    static readonly GEMINI = new Tag('Gemini API', '#457189');
    static readonly GITHUB_WEBHOOKS = new Tag('GitHub Webhooks', '#457189');






    private constructor(private readonly key: string, public readonly color: string) {
    }

    toString() {
        return this.key;
    }

}
