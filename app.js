// Base de Datos Curricular Colombiana - MEN
const curriculumData = {
    "Matemáticas": {
        "Preescolar": {
            dba: ["Reconoce patrones en su entorno", "Identifica cantidades", "Reconoce figuras geométricas básicas"],
            standards: ["Reconoce significados del número", "Utiliza números para contar", "Identifica características de objetos"],
            guidelines: "Enfoque lúdico y experimental. Aprendizaje a través del juego y la manipulación de objetos.",
            competencies: {
                "Concordar": ["Asocia números con cantidades", "Relaciona formas geométricas", "Vincula patrones"],
                "Relevar": ["Identifica números mayores", "Destaca figuras importantes", "Reconoce patrones principales"],
                "Inferir": ["Predice el número siguiente", "Anticipa cantidades", "Deduce patrones"],
                "Construir": ["Crea patrones nuevos", "Forma figuras", "Diseña secuencias numéricas"]
            }
        },
        "Primaria-Inicial": {
            dba: ["Reconoce sistemas de numeración", "Realiza operaciones básicas", "Utiliza figuras geométricas"],
            standards: ["Reconoce y relaciona números", "Realiza cálculos simples", "Identifica posiciones y direcciones"],
            guidelines: "Actividades que desarrollen pensamiento numérico. Uso de material concreto y semiconcreto.",
            competencies: {
                "Concordar": ["Asocia números con valores", "Relaciona operaciones", "Vincula conceptos"],
                "Relevar": ["Identifica números clave", "Destaca operaciones importantes", "Reconoce magnitudes"],
                "Inferir": ["Predice resultados", "Anticipa soluciones", "Deduce operaciones"],
                "Construir": ["Crea problemas", "Formula operaciones", "Diseña secuencias"]
            }
        },
        "Primaria-Intermedia": {
            dba: ["Comprende sistemas numéricos", "Realiza operaciones complejas", "Identifica propiedades geométricas"],
            standards: ["Reconoce números naturales", "Realiza multiplicación y división", "Identifica polígonos"],
            guidelines: "Desarrollo de pensamiento algorítmico. Resolución de problemas contextualizados.",
            competencies: {
                "Concordar": ["Asocia operaciones con contextos", "Relaciona propiedades", "Vincula conceptos"],
                "Relevar": ["Destaca operaciones clave", "Identifica propiedades principales", "Reconoce estructuras"],
                "Inferir": ["Deduce patrones matemáticos", "Anticipa resultados", "Interpreta situaciones"],
                "Construir": ["Crea estrategias de cálculo", "Diseña soluciones", "Formula conjeturas"]
            }
        },
        "Secundaria": {
            dba: ["Utiliza números racionales", "Comprende expresiones algebraicas", "Analiza funciones"],
            standards: ["Identifico propiedades en números", "Resuelvo ecuaciones", "Analizo gráficas"],
            guidelines: "Pensamiento variacional. Modelamiento matemático de situaciones reales.",
            competencies: {
                "Concordar": ["Asocia conceptos algebraicos", "Relaciona variables", "Vincula funciones"],
                "Relevar": ["Destaca elementos clave", "Identifica variables principales", "Reconoce estructuras"],
                "Inferir": ["Deduce propiedades", "Anticipa comportamientos", "Interpreta gráficas"],
                "Construir": ["Crea modelos matemáticos", "Formula ecuaciones", "Diseña funciones"]
            }
        },
        "Media": {
            dba: ["Comprende números reales", "Analiza funciones trigonométricas", "Interpreta cálculo diferencial"],
            standards: ["Analizo propiedades de funciones", "Utilizo técnicas de cálculo", "Resuelvo problemas complejos"],
            guidelines: "Pensamiento abstracto y formal. Aplicaciones prácticas del cálculo.",
            competencies: {
                "Concordar": ["Asocia conceptos avanzados", "Relaciona teoremas", "Vincula disciplinas"],
                "Relevar": ["Destaca conceptos fundamentales", "Identifica principios", "Reconoce teoremas clave"],
                "Inferir": ["Deduce propiedades complejas", "Anticipa comportamientos", "Interpreta límites"],
                "Construir": ["Crea demostraciones", "Formula teoremas", "Diseña aplicaciones"]
            }
        }
    },
    "Lenguaje y Comunicación": {
        "Preescolar": {
            dba: ["Participa en conversaciones", "Reconoce sonidos del lenguaje", "Expresa ideas oralmente"],
            standards: ["Expresa emociones", "Escucha con atención", "Reconoce palabras"],
            guidelines: "Desarrollo del lenguaje a través del juego y la interacción. Enfoque comunicativo.",
            competencies: {
                "Concordar": ["Asocia palabras con significados", "Relaciona sonidos", "Vincula contextos"],
                "Relevar": ["Identifica palabras clave", "Destaca mensajes importantes", "Reconoce ideas principales"],
                "Inferir": ["Deduce significados", "Anticipa contenidos", "Interpreta historias"],
                "Construir": ["Crea historias", "Forma palabras", "Diseña mensajes"]
            }
        },
        "Primaria-Inicial": {
            dba: ["Lee textos simples", "Escribe palabras y frases", "Participa en diálogos"],
            standards: ["Lee comprensivamente", "Produce textos simples", "Comunica ideas"],
            guidelines: "Alfabetización inicial. Lectura y escritura significativas.",
            competencies: {
                "Concordar": ["Asocia letras con sonidos", "Relaciona palabras", "Vincula textos"],
                "Relevar": ["Identifica ideas principales", "Destaca personajes", "Reconoce eventos"],
                "Inferir": ["Deduce significados", "Anticipa finales", "Interpreta emociones"],
                "Construir": ["Crea historias", "Formula preguntas", "Diseña textos"]
            }
        },
        "Primaria-Intermedia": {
            dba: ["Lee comprensivamente", "Produce textos coherentes", "Analiza características de textos"],
            standards: ["Comprendo lo que leo", "Produzco textos escritos", "Identifico características"],
            guidelines: "Lectura crítica y escritura expresiva. Análisis de estructuras textuales.",
            competencies: {
                "Concordar": ["Asocia géneros textuales", "Relaciona autores", "Vincula tradiciones"],
                "Relevar": ["Destaca temas centrales", "Identifica ideas clave", "Reconoce estructuras"],
                "Inferir": ["Deduce intenciones autorales", "Anticipa desarrollos", "Interpreta simbolismos"],
                "Construir": ["Crea textos originales", "Formula críticas", "Diseña argumentos"]
            }
        },
        "Secundaria": {
            dba: ["Comprende textos complejos", "Produce textos argumentativos", "Analiza discursos"],
            standards: ["Interpreto críticamente", "Produzco ensayos", "Analizo discursos públicos"],
            guidelines: "Lectura crítica y argumentación. Análisis de medios masivos.",
            competencies: {
                "Concordar": ["Asocia textos literarios", "Relaciona corrientes", "Vincula contextos"],
                "Relevar": ["Destaca argumentos centrales", "Identifica tesis", "Reconoce recursos"],
                "Inferir": ["Deduce ideologías", "Anticipa efectos", "Interpreta subjetividades"],
                "Construir": ["Crea argumentaciones", "Formula propuestas", "Diseña discursos"]
            }
        },
        "Media": {
            dba: ["Analiza textos literarios", "Produce textos sofisticados", "Interpreta discursos multimodales"],
            standards: ["Interpreto obras literarias", "Produzco textos académicos", "Analizo medios digitales"],
            guidelines: "Literatura comparada y análisis discursivo. Competencia comunicativa avanzada.",
            competencies: {
                "Concordar": ["Asocia periodos literarios", "Relaciona autores", "Vincula movimientos"],
                "Relevar": ["Destaca temáticas", "Identifica estilos", "Reconoce innovaciones"],
                "Inferir": ["Deduce influencias", "Anticipa evoluciones", "Interpreta significados profundos"],
                "Construir": ["Crea análisis críticos", "Formula interpretaciones", "Diseña investigaciones"]
            }
        }
    },
    "Ciencias Naturales": {
        "Preescolar": {
            dba: ["Observa seres vivos", "Reconoce cambios naturales", "Explora el entorno"],
            standards: ["Entiendo cambios naturales", "Reconozco seres vivos", "Observo características"],
            guidelines: "Enfoque observacional y exploratorio. Curiosidad científica.",
            competencies: {
                "Concordar": ["Asocia organismos con hábitats", "Relaciona seres vivos", "Vincula entornos"],
                "Relevar": ["Identifica características notables", "Destaca diferencias", "Reconoce cambios"],
                "Inferir": ["Deduce necesidades", "Anticipa cambios", "Interpreta ciclos"],
                "Construir": ["Crea clasificaciones", "Diseña experimentos simples", "Formula hipótesis"]
            }
        },
        "Primaria-Inicial": {
            dba: ["Identifica características de seres vivos", "Comprende ciclos de vida", "Reconoce ecosistemas"],
            standards: ["Identifico seres vivos", "Reconozco ciclos", "Comprendo interacciones"],
            guidelines: "Biología básica y ecología. Metodología científica simple.",
            competencies: {
                "Concordar": ["Asocia organismos con funciones", "Relaciona ciclos", "Vincula cadenas"],
                "Relevar": ["Identifica especies clave", "Destaca adaptaciones", "Reconoce estructuras"],
                "Inferir": ["Deduce adaptaciones", "Anticipa consecuencias", "Interpreta relaciones"],
                "Construir": ["Crea mapas de ecosistemas", "Diseña experimentos", "Formula conclusiones"]
            }
        },
        "Primaria-Intermedia": {
            dba: ["Comprende sistemas del cuerpo", "Analiza cadenas alimenticias", "Interpreta fenómenos naturales"],
            standards: ["Identifico sistemas corporales", "Reconozco niveles tróficos", "Comprendo fenómenos"],
            guidelines: "Anatomía, fisiología y ecología integrada. Pensamiento científico.",
            competencies: {
                "Concordar": ["Asocia órganos con funciones", "Relaciona niveles", "Vincula procesos"],
                "Relevar": ["Destaca sistemas principales", "Identifica órganos clave", "Reconoce fenómenos"],
                "Inferir": ["Deduce consecuencias", "Anticipa cambios", "Interpreta mecanismos"],
                "Construir": ["Crea modelos corporales", "Diseña investigaciones", "Formula explicaciones"]
            }
        },
        "Secundaria": {
            dba: ["Comprende genética", "Analiza evolución", "Interpreta procesos metabólicos"],
            standards: ["Identifico procesos genéticos", "Reconozco evolución", "Comprendo metabolismo"],
            guidelines: "Biología molecular y genética. Metodología científica rigurosa.",
            competencies: {
                "Concordar": ["Asocia genes con caracteres", "Relaciona especies", "Vincula procesos"],
                "Relevar": ["Destaca leyes genéticas", "Identifica mutaciones", "Reconoce selección"],
                "Inferir": ["Deduce herencias", "Anticipa evoluciones", "Interpreta adaptaciones"],
                "Construir": ["Crea pedigríes", "Diseña experimentos complejos", "Formula teorías"]
            }
        },
        "Media": {
            dba: ["Comprende biología celular", "Analiza bioquímica", "Interpreta biotecnología"],
            standards: ["Identifico procesos celulares", "Reconozco vías metabólicas", "Comprendo aplicaciones"],
            guidelines: "Biología avanzada y biotecnología. Ciencia contemporánea.",
            competencies: {
                "Concordar": ["Asocia moléculas con funciones", "Relaciona vías", "Vincula aplicaciones"],
                "Relevar": ["Destaca procesos clave", "Identifica moléculas importantes", "Reconoce implicaciones"],
                "Inferir": ["Deduce mecanismos", "Anticipa impactos", "Interpreta futuro"],
                "Construir": ["Crea protocolos", "Diseña biotecnologías", "Formula soluciones"]
            }
        }
    },
    "Ciencias Sociales": {
        "Preescolar": {
            dba: ["Reconoce su comunidad", "Identifica roles familiares", "Observa cambios en su entorno"],
            standards: ["Conozco mi familia", "Reconozco mi comunidad", "Observo cambios"],
            guidelines: "Identidad y sentido de pertenencia. Conocimiento del entorno inmediato.",
            competencies: {
                "Concordar": ["Asocia personas con roles", "Relaciona comunidades", "Vincula familias"],
                "Relevar": ["Identifica miembros importantes", "Destaca valores", "Reconoce tradiciones"],
                "Inferir": ["Deduce responsabilidades", "Anticipa cambios", "Interpreta costumbres"],
                "Construir": ["Crea historias familiares", "Diseña proyectos comunitarios", "Formula valores"]
            }
        },
        "Primaria-Inicial": {
            dba: ["Comprende historia local", "Reconoce geografía cercana", "Identifica instituciones"],
            standards: ["Identifico características locales", "Reconozco instituciones", "Comprendo historia"],
            guidelines: "Historia local y geografía vivencial. Ciudadanía básica.",
            competencies: {
                "Concordar": ["Asocia lugares con historias", "Relaciona épocas", "Vincula culturas"],
                "Relevar": ["Identifica eventos importantes", "Destaca personajes", "Reconoce monumentos"],
                "Inferir": ["Deduce cambios", "Anticipa consecuencias", "Interpreta procesos"],
                "Construir": ["Crea líneas de tiempo", "Diseña mapas", "Formula narrativas"]
            }
        },
        "Primaria-Intermedia": {
            dba: ["Analiza historia nacional", "Comprende geografía física", "Interpreta organización política"],
            standards: ["Identifico épocas históricas", "Reconozco regiones", "Comprendo estructuras"],
            guidelines: "Historia nacional y geografía política. Ciudadanía participativa.",
            competencies: {
                "Concordar": ["Asocia eventos con causas", "Relaciona regiones", "Vincula sistemas"],
                "Relevar": ["Destaca periodos", "Identifica actores", "Reconoce estructuras"],
                "Inferir": ["Deduce impactos", "Anticipa consecuencias", "Interpreta influencias"],
                "Construir": ["Crea análisis históricos", "Diseña propuestas", "Formula explicaciones"]
            }
        },
        "Secundaria": {
            dba: ["Comprende historia universal", "Analiza geografía humana", "Interpreta sistemas políticos"],
            standards: ["Identifico contextos históricos", "Reconozco espacios geográficos", "Comprendo procesos"],
            guidelines: "Historia universal y geopolítica. Pensamiento crítico social.",
            competencies: {
                "Concordar": ["Asocia civilizaciones", "Relaciona sistemas", "Vincula culturas"],
                "Relevar": ["Destaca transformaciones", "Identifica conflictos", "Reconoce cambios"],
                "Inferir": ["Deduce consecuencias", "Anticipa tendencias", "Interpreta dinámicas"],
                "Construir": ["Crea ensayos argumentativos", "Diseña proyectos sociales", "Formula teorías"]
            }
        },
        "Media": {
            dba: ["Analiza filosofía política", "Comprende economía global", "Interpreta conflictos internacionales"],
            standards: ["Identifico teorías", "Reconozco sistemas", "Comprendo dinámicas globales"],
            guidelines: "Filosofía política y economía política. Pensamiento estratégico.",
            competencies: {
                "Concordar": ["Asocia ideologías", "Relaciona economías", "Vincula poder"],
                "Relevar": ["Destaca teorías clave", "Identifica actores globales", "Reconoce tendencias"],
                "Inferir": ["Deduce impactos", "Anticipa escenarios", "Interpreta futuro"],
                "Construir": ["Crea análisis complejos", "Diseña soluciones", "Formula propuestas"]
            }
        }
    }
};

// Habilidades de Pensamiento CRIC
const skillsData = {
    "Concordar": {
        icon: "🔗",
        description: "Asociar, relacionar y vincular conceptos",
        methods: [
            "Mapas mentales con conexiones temáticas",
            "Analogías y comparaciones conceptuales",
            "Redes de significado y conceptuales",
            "Juegos de asociación y parejas",
            "Diagramas Venn de intersección"
        ]
    },
    "Relevar": {
        icon: "⭐",
        description: "Destacar e identificar lo más importante",
        methods: [
            "Subrayado estratégico de ideas clave",
            "Elaboración de resúmenes estructurados",
            "Esquemas jerárquicos de información",
            "Pirámides de información",
            "Filtrado de datos relevantes"
        ]
    },
    "Inferir": {
        icon: "🔍",
        description: "Deducir, interpretar y analizar críticamente",
        methods: [
            "Análisis de casos y situaciones problema",
            "Lectura crítica y predic tiva",
            "Debates argumentados",
            "Análisis de consecuencias y causas",
            "Interpretación de símbolos y códigos"
        ]
    },
    "Construir": {
        icon: "🏗️",
        description: "Crear, sintetizar e innovar",
        methods: [
            "Proyectos creativos y originales",
            "Maquetas y modelos tridimensionales",
            "Historietas y narrativas",
            "Diseño de soluciones innovadoras",
            "Síntesis y proposición de nuevas ideas"
        ]
    }
};

// Fases del Hexágono Pedagógico
const hexagonPhases = {
    "Propósitos": "Definir objetivos claros y medibles del aprendizaje. ¿Qué queremos que los estudiantes aprendan?",
    "Diagnóstico": "Valorar los saberes previos y necesidades de los estudiantes. Explorar sus conocimientos base.",
    "Contenidos": "Seleccionar conceptos, procedimientos y actitudes a enseñar. Estructurar el saber.",
    "Métodos": "Elegir estrategias lúdico-didácticas adaptadas a la habilidad CRIC seleccionada.",
    "Recursos": "Identificar materiales, espacios y herramientas necesarios para la actividad.",
    "Evaluación": "Aplicar múltiples estrategias para valorar el proceso y producto del aprendizaje."
};

// Fases de la Secuencia Didáctica
const sequencePhases = {
    "Inicio": {
        percentage: 15,
        description: "Exploración de conocimientos previos, motivación e intriga.",
        content: "Actividades que capten la atención, generen curiosidad y activen saberes previos mediante juegos, preguntas provocadoras y exploraciones iniciales."
    },
    "Desarrollo": {
        percentage: 50,
        description: "Conceptualización y construcción activa del conocimiento.",
        content: "Desarrollo de actividades lúdico-didácticas, experiencias directas, reflexión conjunta, análisis de información y construcción colaborativa de conceptos."
    },
    "Cierre": {
        percentage: 25,
        description: "Aplicación, síntesis, evaluación y reflexión final.",
        content: "Aplicación de aprendizajes a situaciones nuevas, socialización de productos, evaluación formativa y reflexión metacognitiva sobre el proceso."
    }
};

// Estrategias de Evaluación por Habilidad CRIC
const evaluationStrategies = {
    "Concordar": {
        hetero: "Rúbrica que evalúa la precisión de asociaciones y la coherencia de conexiones realizadas.",
        coevaluacion: "Los estudiantes validan mutuamente sus mapas de asociaciones y redes conceptuales.",
        auto: "El estudiante reflexiona sobre cómo asoció los conceptos y qué conexiones le fueron significativas.",
        formativa: "Observación del proceso de construcción de asociaciones durante la actividad.",
        sumativa: "Producto final: mapa conceptual, red de significados o diagrama de conexiones."
    },
    "Relevar": {
        hetero: "Rúbrica que valora la identificación correcta de elementos principales y jerarquización.",
        coevaluacion: "Los estudiantes verifican mutuamente si identificaron los mismos elementos relevantes.",
        auto: "Reflexión sobre qué criterios usó para identificar lo importante y la validez de sus decisiones.",
        formativa: "Análisis de los subrayados, resúmenes y esquemas durante el proceso.",
        sumativa: "Producto final: resumen estructurado, esquema jerárquico o presentación de lo relevante."
    },
    "Inferir": {
        hetero: "Rúbrica que evalúa la lógica de las inferencias, la fundamentación y la profundidad del análisis.",
        coevaluacion: "Los estudiantes validan la coherencia y validez de las interpretaciones de sus compañeros.",
        auto: "Reflexión sobre el razonamiento deductivo utilizado y la confiabilidad de las conclusiones.",
        formativa: "Análisis de las predicciones, interpretaciones y deducciones durante la actividad.",
        sumativa: "Producto final: análisis escrito, presentación de inferencias o proyecto de investigación."
    },
    "Construir": {
        hetero: "Rúbrica que evalúa originalidad, innovación, coherencia y viabilidad de las construcciones.",
        coevaluacion: "Los estudiantes retroalimentan mutuamente sobre la originalidad y calidad de los productos.",
        auto: "Reflexión sobre el proceso creativo, decisiones tomadas e innovaciones incorporadas.",
        formativa: "Observación del proceso de diseño, experimentación y construcción de prototipos.",
        sumativa: "Producto final: proyecto creativo, maqueta, historieta, solución innovadora o prototipo."
    }
};

// Actividades por Habilidad CRIC
const activitiesByCRIC = {
    "Concordar": [
        "Construcción colaborativa de mapas mentales donde los estudiantes conectan el tema con otros conceptos conocidos.",
        "Juego de analogías donde asocian situaciones del tema con experiencias cotidianas y ejemplos contextuales.",
        "Creación de redes conceptuales vinculando el tema central con conceptos relacionados mediante palabras de enlace."
    ],
    "Relevar": [
        "Actividad de subrayado estratégico: identificar y marcar las ideas principales del tema con justificación de criterios.",
        "Construcción de esquemas jerárquicos o pirámides de información destacando los elementos más importantes.",
        "Resumen estructurado donde se sintetizan los aspectos clave del tema en párrafos breves pero completos."
    ],
    "Inferir": [
        "Análisis de casos problema donde deducen causas, efectos y soluciones relacionadas con el tema.",
        "Lectura crítica con preguntas de predicción: ¿qué pasaría si...? ¿Qué consecuencias tendrían...?",
        "Debate argumentado donde los estudiantes defienden interpretaciones sobre el tema con evidencias."
    ],
    "Construir": [
        "Proyecto creativo donde diseñan una aplicación, solución o producto innovador basado en el tema.",
        "Elaboración de historietas, maquetas o modelos 3D que representen de forma original los conceptos.",
        "Propuesta de estrategia o iniciativa nueva que integre el tema de manera innovadora y contextualizada."
    ]
};

// Materiales según la Habilidad CRIC
const materialsByCRIC = {
    "Concordar": [
        "Papel, lápices de colores, marcadores",
        "Cartulinas y materiales para mapas mentales",
        "Tarjetas para juegos de asociación",
        "Tableros de corcho o pizarras blancas",
        "Materiales para construir redes (hilos, fichas)"
    ],
    "Relevar": [
        "Documentos y textos para analizar",
        "Marcadores y colores para subrayar",
        "Plantillas para esquemas y resúmenes",
        "Papelógrafos o cartulinas",
        "Herramientas digitales para esquematizar"
    ],
    "Inferir": [
        "Casos de estudio y problemas impresos",
        "Documentos audiovisuales para análisis",
        "Materiales para debates (reglas, cronómetro)",
        "Fichas con preguntas reflexivas",
        "Espacios para discusión y socialización"
    ],
    "Construir": [
        "Materiales variados: papel, cartón, arcilla, reciclables",
        "Herramientas: tijeras, pegante, cinta adhesiva",
        "Computadores para diseño digital",
        "Recursos multimedia (imágenes, videos)",
        "Espacios amplios para crear y exhibir"
    ]
};

// Función para obtener duración de fases
function calculatePhaseDurations(totalDuration) {
    return {
        inicio: Math.round(totalDuration * 0.15),
        desarrollo: Math.round(totalDuration * 0.50),
        cierre: Math.round(totalDuration * 0.25)
    };
}

// Función para generar DBA personalizados
function generateDBA(subject, level) {
    if (curriculumData[subject] && curriculumData[subject][level]) {
        return curriculumData[subject][level].dba;
    }
    return ["DBA general 1", "DBA general 2", "DBA general 3"];
}

// Función para generar Estándares
function generateStandards(subject, level) {
    if (curriculumData[subject] && curriculumData[subject][level]) {
        return curriculumData[subject][level].standards;
    }
    return ["Estándar general 1", "Estándar general 2", "Estándar general 3"];
}

// Función para generar Lineamientos
function generateGuidelines(subject, level) {
    if (curriculumData[subject] && curriculumData[subject][level]) {
        return curriculumData[subject][level].guidelines;
    }
    return "Lineamientos generales para la enseñanza significativa del tema.";
}

// Función para generar Competencias
function generateCompetencies(subject, level, skill) {
    if (curriculumData[subject] && curriculumData[subject][level] && curriculumData[subject][level].competencies) {
        return curriculumData[subject][level].competencies[skill] || [];
    }
    return [`Competencia general en ${skill}`];
}

// Event Listener para el formulario
document.getElementById('planningForm').addEventListener('submit', function(e) {
    e.preventDefault();

    // Obtener valores del formulario
    const subject = document.getElementById('subject').value;
    const level = document.getElementById('level').value;
    const grade = document.getElementById('grade').value || 'No especificado';
    const topic = document.getElementById('topic').value;
    const thinking = document.getElementById('thinking').value;
    const duration = parseInt(document.getElementById('duration').value);

    // Calcular duraciones de fases
    const durations = calculatePhaseDurations(duration);

    // Obtener datos curriculares
    const dba = generateDBA(subject, level);
    const standards = generateStandards(subject, level);
    const guidelines = generateGuidelines(subject, level);
    const competencies = generateCompetencies(subject, level, thinking);

    // Obtener estrategias según habilidad CRIC
    const strategies = evaluationStrategies[thinking];
    const activities = activitiesByCRIC[thinking];
    const materials = materialsByCRIC[thinking];

    // Llenar identificación
    document.getElementById('resSubject').textContent = subject;
    document.getElementById('resLevel').textContent = level;
    document.getElementById('resGrade').textContent = grade;
    document.getElementById('resDuration').textContent = `${duration} minutos`;
    document.getElementById('resTopic').textContent = topic;
    document.getElementById('resThinking').textContent = `${skillsData[thinking].icon} ${thinking} - ${skillsData[thinking].description}`;

    // Llenar DBA
    const dbaList = document.getElementById('resDBA');
    dbaList.innerHTML = '';
    dba.forEach(item => {
        const li = document.createElement('li');
        li.textContent = item;
        dbaList.appendChild(li);
    });

    // Llenar Estándares
    const standardsList = document.getElementById('resStandards');
    standardsList.innerHTML = '';
    standards.forEach(item => {
        const li = document.createElement('li');
        li.textContent = item;
        standardsList.appendChild(li);
    });

    // Llenar Lineamientos
    document.getElementById('resGuidelines').innerHTML = `<li>${guidelines}</li>`;

    // Llenar Competencias
    const competenciesList = document.getElementById('resCompetencies');
    competenciesList.innerHTML = '';
    competencies.forEach(item => {
        const li = document.createElement('li');
        li.textContent = item;
        competenciesList.appendChild(li);
    });

    // Llenar Hexágono Pedagógico
    document.getElementById('resPurpose').textContent = `Que los estudiantes comprendan y apliquen ${topic} desarrollando la habilidad de ${thinking}, mediante experiencias lúdico-didácticas significativas.`;
    document.getElementById('resDiagnosis').textContent = `Exploración mediante preguntas sobre conocimientos previos: ¿Qué saben los estudiantes sobre ${topic}? ¿Qué experiencias tienen? ¿Cómo relacionan esto con su realidad?`;
    document.getElementById('resContents').textContent = `Conceptos: ${topic} y sus componentes clave. Procedimientos: aplicación de estrategias de ${thinking}. Actitudes: curiosidad, colaboración y pensamiento crítico.`;
    document.getElementById('resMethods').textContent = `Estrategias lúdico-didácticas centradas en ${thinking}: ${skillsData[thinking].methods.slice(0, 2).join(', ')}, entre otras actividades interactivas y motivadoras.`;
    document.getElementById('resResources').textContent = `Materiales: ${materials.slice(0, 3).join(', ')}. Espacios: aula flexible con disposición para trabajo colaborativo.`;
    document.getElementById('resEvaluation').textContent = `Evaluación integral mediante múltiples estrategias: observación del proceso, productos creados, participación y autoreflexión de los estudiantes.`;

    // Llenar Secuencia Didáctica
    document.getElementById('resPhaseInicio').textContent = sequencePhases.Inicio.description;
    document.getElementById('resTiempoInicio').textContent = `Duración: ${durations.inicio} minutos`;

    document.getElementById('resPhaseDesarrollo').textContent = sequencePhases.Desarrollo.description;
    document.getElementById('resTiempoDesarrollo').textContent = `Duración: ${durations.desarrollo} minutos`;

    document.getElementById('resPhaseCierre').textContent = sequencePhases.Cierre.description;
    document.getElementById('resTiemposCierre').textContent = `Duración: ${durations.cierre} minutos`;

    // Llenar Actividades
    document.getElementById('actThinking').textContent = thinking;
    document.getElementById('resActivity1').textContent = activities[0];
    document.getElementById('resActivity2').textContent = activities[1];
    document.getElementById('resActivity3').textContent = activities[2];

    // Llenar Estrategias de Evaluación
    document.getElementById('resEvalHetero').textContent = strategies.hetero;
    document.getElementById('resEvalCo').textContent = strategies.coevaluacion;
    document.getElementById('resEvalAuto').textContent = strategies.auto;
    document.getElementById('resEvalFormativa').textContent = strategies.formativa;
    document.getElementById('resEvalSumativa').textContent = strategies.sumativa;

    // Llenar Materiales
    const materialsList = document.getElementById('resMaterials');
    materialsList.innerHTML = '';
    materials.forEach(item => {
        const li = document.createElement('li');
        li.textContent = item;
        materialsList.appendChild(li);
    });

    // Llenar Notas
    const notesList = document.getElementById('resNotes');
    notesList.innerHTML = '';
    const notes = [
        `Esta planeación está diseñada según Pedagogía Conceptual con el Hexágono Pedagógico.`,
        `La habilidad CRIC seleccionada (${thinking}) estructura todas las actividades.`,
        `Adapta las actividades según el contexto específico de tu institución.`,
        `Asegúrate de tener disponibles todos los materiales antes de iniciar la clase.`,
        `Fomenta la participación activa y el aprendizaje colaborativo en todas las fases.`,
        `Realiza evaluación continua y formativa durante todo el proceso.`
    ];
    notes.forEach(note => {
        const li = document.createElement('li');
        li.textContent = note;
        notesList.appendChild(li);
    });

    // Mostrar sección de resultados
    document.getElementById('resultsSection').style.display = 'block';
    
    // Scroll a resultados
    setTimeout(() => {
        document.getElementById('resultsSection').scrollIntoView({ behavior: 'smooth' });
    }, 100);
});
