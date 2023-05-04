export interface ProjectParams {
    featured: boolean,

    // preferred classe in entity explorer
    preferredClasses: string[]

    geovID: number,
    geovName: string,

    teiURL: string,
    sparqlURL: string,

    fullName: string,
    shortName: string,
    description: string,

    hasPage: boolean
    hasSPARQL: boolean
    hasTEI: boolean
}

export const projectsParams: Array<ProjectParams> = [
    // Default project
    {
        geovID: 0,
        geovName: 'Community',

        preferredClasses: [],

        featured: false,

        teiURL: '',
        sparqlURL: '',

        fullName: 'Community Project',
        shortName: 'Community Project',
        description: 'Community Project',

        hasPage: false,
        hasSPARQL: false,
        hasTEI: false
    },

    // AMPI
    {
        geovID: 924033,
        geovName: 'AMPI',

        preferredClasses: ['c21', 'c219', 'c635', 'c785', 'c633'],

        featured: true,

        teiURL: '',
        sparqlURL: '',

        fullName: 'Tagebücher Anna Maria Preiswerk-Iselin',
        shortName: 'Tagebücher Anna Maria Preiswerk-Iselin',
        description: 'Digitale Edition der Tagebücher der Anna Maria Preiswerk-Iselin (1758-1840).',

        hasPage: true,
        hasSPARQL: true,
        hasTEI: true
    },

    // Processetti
    {
        geovID: 591,
        geovName: 'Processetti',

        preferredClasses: [],

        featured: true,

        teiURL: '',
        sparqlURL: '',

        fullName: 'ANR Processetti',
        shortName: 'ANR Processetti',
        description: 'Les Processetti : Migration et mariage à Venise au 16ème/17ème siècle.',

        hasPage: true,
        hasSPARQL: false,
        hasTEI: false
    },

    // Maritime History
    {
        geovID: 84760,
        geovName: 'Maritime History',

        preferredClasses: ['c523', 'c21', 'c363', 'c522', 'c529'],

        featured: true,

        teiURL: '',
        sparqlURL: '',

        fullName: 'Maritime History',
        shortName: 'Maritime History',
        description: 'Historical information about the Dutch East India Company, ready to explore and re-use at your hand.',

        hasPage: true,
        hasSPARQL: true,
        hasTEI: false
    },


    // ANR Globalvat
    {
        geovID: -1,
        geovName: 'GLOBALVAT',

        preferredClasses: [],

        featured: false,

        teiURL: '',
        sparqlURL: '',

        fullName: 'ANR Globalvat',
        shortName: 'ANR Globalvat',
        description: 'Reconstruire les sociétés et la personne humaine (1939-58) : L’apport des archives vaticanes.',

        hasPage: false,
        hasSPARQL: false,
        hasTEI: false
    },

    // EuroClimHist
    {
        geovID: 6529336,
        geovName: 'EuroClimHist',

        preferredClasses: [],

        featured: false,

        teiURL: '',
        sparqlURL: '',

        fullName: 'Euro-Climhist Database',
        shortName: 'Euro-Climhist Database',
        description: 'The historical climate database Euro-Climhist contains a unique set of data on observations and measurement series of weather phenomena.',

        hasPage: true,
        hasSPARQL: true,
        hasTEI: false
    },

    // EHESS
    {
        geovID: 3354801,
        geovName: 'Roma\'s deportation to Transnistria, 1942-1944',

        preferredClasses: ['c363', 'c21', 'c68', 'c636',],

        featured: true,

        teiURL: '',
        sparqlURL: '',

        fullName: 'Roma\'s deportation to Transnistria, 1942-1944',
        shortName: 'Roma\'s deportation',
        description: 'Individual trajectories, and collective fates. ',

        hasPage: true,
        hasSPARQL: true,
        hasTEI: false
    },
    // Softpowarts
    {
        geovID: 3350169,
        geovName: 'Softpowarts',

        preferredClasses: ['c363', 'c21', 'c870', 'c247', 'c698', 'c441'],

        featured: false,

        teiURL: '',
        sparqlURL: '',

        fullName: 'Softpowarts',
        shortName: 'Softpowarts',
        description: "Le soft power sud-américain : l'usage politique de la circulation des arts de la scène au XXe siècle",

        hasPage: true,
        hasSPARQL: true,
        hasTEI: false
    }

]





