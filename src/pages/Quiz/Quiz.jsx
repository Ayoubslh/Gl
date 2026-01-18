import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';
import { 
  Brain, 
  CheckCircle2, 
  XCircle, 
  ArrowRight, 
  RotateCcw,
  Trophy,
  Target,
  Clock,
  Lightbulb
} from 'lucide-react';
import './Quiz.css';

const quizQuestionsFr = [
  // Chapter 1 - Software Engineering Introduction
  {
    id: 1,
    category: 'Génie Logiciel',
    question: 'Qu\'est-ce que le génie logiciel ?',
    options: [
      'Un langage de programmation',
      'L\'application d\'une approche systématique au développement logiciel',
      'Un type de logiciel',
      'Une méthode de test'
    ],
    correct: 1,
    explanation: 'Le génie logiciel est l\'application d\'une approche systématique, disciplinée et quantifiable au développement, à l\'exploitation et à la maintenance du logiciel.'
  },
  {
    id: 2,
    category: 'Génie Logiciel',
    question: 'Quelle est la principale cause de la "crise du logiciel" ?',
    options: [
      'Manque d\'ordinateurs',
      'Complexité croissante et manque de méthodes',
      'Prix des logiciels trop bas',
      'Trop de programmeurs'
    ],
    correct: 1,
    explanation: 'La crise du logiciel est due à la complexité croissante des systèmes, au manque de méthodologies rigoureuses, et à une mauvaise gestion des projets.'
  },
  {
    id: 3,
    category: 'Génie Logiciel',
    question: 'Quel facteur de qualité décrit l\'aptitude à fonctionner en conditions anormales ?',
    options: [
      'Validité',
      'Fiabilité',
      'Robustesse',
      'Portabilité'
    ],
    correct: 2,
    explanation: 'La robustesse est l\'aptitude d\'un logiciel à fonctionner même en dehors des conditions normales d\'utilisation.'
  },
  // Chapter 2 - Development Process
  {
    id: 4,
    category: 'Processus',
    question: 'Quels sont les trois cycles de la méthode MERISE ?',
    options: [
      'Analyse, Conception, Implémentation',
      'Abstraction, Décision, Cycle de vie',
      'Inception, Élaboration, Construction',
      'Étude, Développement, Maintenance'
    ],
    correct: 1,
    explanation: 'MERISE utilise trois cycles : le cycle d\'abstraction (données, traitements), le cycle de décision (comité de pilotage) et le cycle de vie (conception, réalisation, maintenance).'
  },
  {
    id: 2,
    category: 'Processus',
    question: 'Combien de phases comporte le Processus Unifié (UP) ?',
    options: [
      '3 phases',
      '4 phases',
      '5 phases',
      '6 phases'
    ],
    correct: 1,
    explanation: 'UP comporte 4 phases : Inception (démarrage), Élaboration (architecture), Construction (développement) et Transition (déploiement).'
  },
  {
    id: 3,
    category: 'Processus',
    question: 'Que représente la branche "technique" dans le processus 2TUP ?',
    options: [
      'L\'analyse des besoins fonctionnels',
      'L\'architecture technique et choix technologiques',
      'Les tests et la validation',
      'La documentation utilisateur'
    ],
    correct: 1,
    explanation: 'Dans 2TUP, la branche technique traite l\'architecture matérielle et logicielle, les choix technologiques, indépendamment des aspects fonctionnels.'
  },
  // Chapter 3 - UML Introduction
  {
    id: 4,
    category: 'UML',
    question: 'Combien de types de diagrammes UML 2.x existe-t-il ?',
    options: [
      '9 diagrammes',
      '11 diagrammes',
      '13 diagrammes',
      '14 diagrammes'
    ],
    correct: 3,
    explanation: 'UML 2.x définit 14 types de diagrammes : 7 diagrammes de structure et 7 diagrammes de comportement.'
  },
  {
    id: 5,
    category: 'UML',
    question: 'Qui sont les "Three Amigos" fondateurs d\'UML ?',
    options: [
      'Rumbaugh, Booch, Jacobson',
      'Gamma, Helm, Johnson',
      'Fowler, Beck, Martin',
      'Meyer, Dijkstra, Hoare'
    ],
    correct: 0,
    explanation: 'Les "Three Amigos" sont James Rumbaugh (OMT), Grady Booch (méthode Booch) et Ivar Jacobson (OOSE/Use Cases) qui ont unifié leurs méthodes pour créer UML.'
  },
  {
    id: 6,
    category: 'UML',
    question: 'Quelles sont les vues du modèle 4+1 de Kruchten ?',
    options: [
      'Logique, Développement, Processus, Physique + Scénarios',
      'Données, Traitements, Flux, Interface + Tests',
      'Statique, Dynamique, Fonctionnelle, Déploiement + Utilisateur',
      'Analyse, Conception, Implémentation, Test + Documentation'
    ],
    correct: 0,
    explanation: 'Le modèle 4+1 comprend : vue Logique (classes), vue Développement (composants), vue Processus (concurrence), vue Physique (déploiement) + vue Scénarios (cas d\'utilisation).'
  },
  // Chapter 4 - Use Case
  {
    id: 7,
    category: 'Use Case',
    question: 'Qu\'est-ce qu\'un acteur dans un diagramme de cas d\'utilisation ?',
    options: [
      'Un composant interne du système',
      'Une entité externe qui interagit avec le système',
      'Une classe du système',
      'Un bouton de l\'interface utilisateur'
    ],
    correct: 1,
    explanation: 'Un acteur est toujours une entité externe au système. Il représente un rôle joué par une personne, un autre système ou un périphérique qui interagit avec le système modélisé.'
  },
  {
    id: 8,
    category: 'Use Case',
    question: 'Quelle est la différence entre <<include>> et <<extend>> ?',
    options: [
      '<<include>> est optionnel, <<extend>> est obligatoire',
      '<<include>> est obligatoire, <<extend>> est optionnel',
      'Il n\'y a pas de différence',
      '<<include>> est pour les acteurs, <<extend>> pour les cas d\'utilisation'
    ],
    correct: 1,
    explanation: '<<include>> indique une inclusion obligatoire (le cas de base inclut toujours le cas inclus), tandis que <<extend>> représente une extension optionnelle qui ne s\'exécute que sous certaines conditions.'
  },
  {
    id: 9,
    category: 'Use Case',
    question: 'Que représente le rectangle qui entoure les cas d\'utilisation ?',
    options: [
      'Un package',
      'Les limites du système',
      'Une classe',
      'Un composant'
    ],
    correct: 1,
    explanation: 'Le rectangle représente les limites (frontières) du système. Les acteurs sont à l\'extérieur car ils sont externes au système.'
  },
  // Chapter 5 - Class Diagram
  {
    id: 10,
    category: 'Classes',
    question: 'Quel symbole représente un attribut privé en UML ?',
    options: [
      '+ (plus)',
      '# (dièse)',
      '- (moins)',
      '~ (tilde)'
    ],
    correct: 2,
    explanation: 'Le symbole "-" (moins) représente la visibilité privée. Les autres symboles sont: "+" pour public, "#" pour protégé, et "~" pour package.'
  },
  {
    id: 11,
    category: 'Classes',
    question: 'Quelle relation représente "le tout ne peut pas exister sans ses parties" ?',
    options: [
      'Association',
      'Agrégation',
      'Composition',
      'Dépendance'
    ],
    correct: 2,
    explanation: 'La composition (losange plein) représente une relation forte où les parties ne peuvent pas exister sans le tout. Quand le tout est détruit, ses parties le sont aussi.'
  },
  {
    id: 12,
    category: 'Classes',
    question: 'Comment représente-t-on une classe abstraite en UML ?',
    options: [
      'En gras',
      'En italique',
      'Soulignée',
      'Entre accolades'
    ],
    correct: 1,
    explanation: 'Une classe abstraite est notée avec son nom en italique. Elle ne peut pas être instanciée directement et sert de modèle pour d\'autres classes.'
  },
  {
    id: 13,
    category: 'Classes',
    question: 'Que signifie la multiplicité "0..*" ?',
    options: [
      'Exactement zéro',
      'Un ou plusieurs',
      'Zéro ou plusieurs',
      'Zéro ou un'
    ],
    correct: 2,
    explanation: '"0..*" signifie "zéro ou plusieurs" - il peut ne pas y avoir d\'instance, ou en avoir un nombre quelconque.'
  },
  // Chapter 6 - Sequence Diagram
  {
    id: 14,
    category: 'Séquence',
    question: 'Que représente une ligne de vie (lifeline) dans un diagramme de séquence ?',
    options: [
      'Une méthode',
      'Un participant à l\'interaction dans le temps',
      'Un message',
      'Une condition'
    ],
    correct: 1,
    explanation: 'Une ligne de vie représente un participant (objet ou acteur) à l\'interaction, montrant son existence au fil du temps (axe vertical).'
  },
  {
    id: 15,
    category: 'Séquence',
    question: 'Quelle est la différence entre un message synchrone et asynchrone ?',
    options: [
      'Synchrone est plus rapide',
      'Synchrone bloque l\'émetteur jusqu\'à la réponse, asynchrone non',
      'Asynchrone est bidirectionnel',
      'Il n\'y a pas de différence'
    ],
    correct: 1,
    explanation: 'Un message synchrone (flèche pleine) bloque l\'émetteur qui attend la réponse. Un message asynchrone (flèche ouverte) permet à l\'émetteur de continuer sans attendre.'
  },
  {
    id: 16,
    category: 'Séquence',
    question: 'Quel fragment combiné représente une boucle ?',
    options: [
      'alt',
      'opt',
      'loop',
      'par'
    ],
    correct: 2,
    explanation: 'Le fragment "loop" représente une boucle, permettant de répéter une séquence de messages. On peut spécifier min..max pour le nombre d\'itérations.'
  },
  {
    id: 17,
    category: 'Séquence',
    question: 'Que signifie le fragment "alt" ?',
    options: [
      'Alternative - branchement conditionnel (if-else)',
      'Altération - modification de données',
      'Alternance - exécution cyclique',
      'Altitude - niveau de priorité'
    ],
    correct: 0,
    explanation: 'Le fragment "alt" représente une alternative avec des branches mutuellement exclusives, équivalent à un if-else en programmation.'
  },
  // Chapter 7 - Activity Diagram
  {
    id: 18,
    category: 'Activité',
    question: 'Comment se nomme le nœud de départ dans un diagramme d\'activité ?',
    options: [
      'Nœud de début',
      'Nœud initial',
      'Point d\'entrée',
      'Start node'
    ],
    correct: 1,
    explanation: 'Le nœud initial (cercle plein noir) marque le point de départ d\'une activité. Il ne peut y en avoir qu\'un seul par partition.'
  },
  {
    id: 19,
    category: 'Activité',
    question: 'Quelle est la différence entre un nœud de décision et un fork ?',
    options: [
      'Décision pour le parallélisme, fork pour les conditions',
      'Décision choisit UNE branche, fork lance TOUTES les branches en parallèle',
      'Fork est plus rapide',
      'Il n\'y a pas de différence'
    ],
    correct: 1,
    explanation: 'Le nœud de décision (losange) choisit une seule branche selon une condition. Le fork (barre) lance toutes les branches simultanément en parallèle.'
  },
  {
    id: 20,
    category: 'Activité',
    question: 'À quoi servent les partitions (swimlanes) ?',
    options: [
      'À séparer les types de données',
      'À organiser les actions par responsabilité/acteur',
      'À accélérer l\'exécution',
      'À documenter le code'
    ],
    correct: 1,
    explanation: 'Les partitions (swimlanes) organisent les actions par responsabilité, montrant quel acteur ou système est responsable de chaque action.'
  },
  // Chapter 8 - State Diagram
  {
    id: 21,
    category: 'États',
    question: 'Qu\'est-ce qu\'un état dans un diagramme d\'états ?',
    options: [
      'Une action unique',
      'Une situation stable où un objet satisfait une condition',
      'Une transition',
      'Un message'
    ],
    correct: 1,
    explanation: 'Un état représente une situation stable dans laquelle un objet satisfait une condition, exécute une activité ou attend un événement.'
  },
  {
    id: 22,
    category: 'États',
    question: 'Quelle est la syntaxe correcte d\'une transition ?',
    options: [
      'action [garde] / événement',
      'événement [garde] / action',
      '[garde] événement action',
      'événement action garde'
    ],
    correct: 1,
    explanation: 'La syntaxe d\'une transition est : événement [garde] / action. L\'événement déclenche la transition, la garde est une condition, et l\'action est exécutée lors de la transition.'
  },
  {
    id: 23,
    category: 'États',
    question: 'Que représente l\'action "entry" dans un état ?',
    options: [
      'Une action à la sortie de l\'état',
      'Une action exécutée à l\'entrée dans l\'état',
      'Une activité continue',
      'Une condition de garde'
    ],
    correct: 1,
    explanation: 'L\'action "entry" est exécutée à chaque fois qu\'on entre dans l\'état, après la transition entrante.'
  },
  {
    id: 24,
    category: 'États',
    question: 'Quelle est la différence entre un état composite OR et AND ?',
    options: [
      'OR est parallèle, AND est séquentiel',
      'OR : un seul sous-état actif, AND : plusieurs sous-états simultanés',
      'Il n\'y a pas de différence',
      'AND est plus rapide'
    ],
    correct: 1,
    explanation: 'Dans un état OR (séquentiel), l\'objet est dans un seul sous-état à la fois. Dans un état AND (concurrent), l\'objet est dans plusieurs sous-états simultanément.'
  }
];

const quizQuestionsEn = [
  // Chapter 1 - Software Engineering Introduction
  {
    id: 1,
    category: 'Software Eng.',
    question: 'What is software engineering?',
    options: [
      'A programming language',
      'The application of a systematic approach to software development',
      'A type of software',
      'A testing method'
    ],
    correct: 1,
    explanation: 'Software engineering is the application of a systematic, disciplined, and quantifiable approach to the development, operation, and maintenance of software.'
  },
  {
    id: 2,
    category: 'Software Eng.',
    question: 'What is the main cause of the "software crisis"?',
    options: [
      'Lack of computers',
      'Increasing complexity and lack of methods',
      'Software prices too low',
      'Too many programmers'
    ],
    correct: 1,
    explanation: 'The software crisis is due to the increasing complexity of systems, lack of rigorous methodologies, and poor project management.'
  },
  {
    id: 3,
    category: 'Software Eng.',
    question: 'Which quality factor describes the ability to function under abnormal conditions?',
    options: [
      'Validity',
      'Reliability',
      'Robustness',
      'Portability'
    ],
    correct: 2,
    explanation: 'Robustness is the ability of software to function even outside normal usage conditions.'
  },
  // Chapter 2 - Development Process
  {
    id: 4,
    category: 'Process',
    question: 'What are the three cycles of the MERISE method?',
    options: [
      'Analysis, Design, Implementation',
      'Abstraction, Decision, Lifecycle',
      'Inception, Elaboration, Construction',
      'Study, Development, Maintenance'
    ],
    correct: 1,
    explanation: 'MERISE uses three cycles: the abstraction cycle (data, processing), the decision cycle (steering committee), and the lifecycle (design, implementation, maintenance).'
  },
  {
    id: 5,
    category: 'Process',
    question: 'How many phases does the Unified Process (UP) have?',
    options: [
      '3 phases',
      '4 phases',
      '5 phases',
      '6 phases'
    ],
    correct: 1,
    explanation: 'UP has 4 phases: Inception, Elaboration, Construction, and Transition.'
  },
  // Chapter 3 - UML Introduction
  {
    id: 6,
    category: 'UML',
    question: 'How many standard diagrams are in UML 2.x?',
    options: [
      '9 diagrams',
      '11 diagrams',
      '13 diagrams',
      '15 diagrams'
    ],
    correct: 2,
    explanation: 'UML 2.x defines 13 standard diagrams, divided into structural diagrams (6) and behavioral diagrams (7).'
  },
  {
    id: 7,
    category: 'UML',
    question: 'Which view is at the center of the 4+1 views?',
    options: [
      'Logical View',
      'Use Case View',
      'Development View',
      'Physical View'
    ],
    correct: 1,
    explanation: 'The Use Case View is at the center of the 4+1 views. It guides other views by describing user requirements.'
  },
  // Chapter 4 - Use Case Diagram
  {
    id: 8,
    category: 'Use Cases',
    question: 'What does an actor represent in a use case diagram?',
    options: [
      'A system function',
      'An external entity interacting with the system',
      'An internal database',
      'A programming class'
    ],
    correct: 1,
    explanation: 'An actor is an external entity (human, system, time) that interacts with the system.'
  },
  {
    id: 9,
    category: 'Use Cases',
    question: 'What is the difference between <<include>> and <<extend>>?',
    options: [
      'Include is optional, extend is mandatory',
      'Include is mandatory, extend is optional/conditional',
      'No difference',
      'Extend is only for actors'
    ],
    correct: 1,
    explanation: '<<include>> indicates that a use case always includes another (mandatory). <<extend>> indicates optional extension under certain conditions.'
  },
  // Chapter 5 - Class Diagram
  {
    id: 10,
    category: 'Classes',
    question: 'What is the visibility of an attribute marked with "-"?',
    options: [
      'Public',
      'Private',
      'Protected',
      'Package'
    ],
    correct: 1,
    explanation: 'The "-" symbol indicates private visibility: the attribute is only accessible within the class itself.'
  },
  {
    id: 11,
    category: 'Classes',
    question: 'What is the difference between aggregation and composition?',
    options: [
      'No difference',
      'Aggregation is stronger than composition',
      'Composition implies part destruction when whole is destroyed',
      'Aggregation uses a filled diamond'
    ],
    correct: 2,
    explanation: 'Composition (filled diamond) represents a strong relationship where parts cannot exist without the whole. When the whole is destroyed, its parts are too.'
  },
  // Chapter 6 - Sequence Diagram
  {
    id: 12,
    category: 'Sequence',
    question: 'What does a lifeline represent in a sequence diagram?',
    options: [
      'A method',
      'A participant in the interaction over time',
      'A message',
      'A condition'
    ],
    correct: 1,
    explanation: 'A lifeline represents a participant (object or actor) in the interaction, showing its existence over time (vertical axis).'
  },
  {
    id: 13,
    category: 'Sequence',
    question: 'What is the difference between synchronous and asynchronous messages?',
    options: [
      'Synchronous is faster',
      'Synchronous blocks sender until response, asynchronous does not',
      'Asynchronous is bidirectional',
      'No difference'
    ],
    correct: 1,
    explanation: 'A synchronous message (solid arrow) blocks the sender who waits for a response. An asynchronous message (open arrow) allows the sender to continue without waiting.'
  },
  // Chapter 7 - Activity Diagram
  {
    id: 14,
    category: 'Activity',
    question: 'What is the starting node in an activity diagram called?',
    options: [
      'Start node',
      'Initial node',
      'Entry point',
      'Begin node'
    ],
    correct: 1,
    explanation: 'The initial node (filled black circle) marks the starting point of an activity. There can only be one per partition.'
  },
  {
    id: 15,
    category: 'Activity',
    question: 'What is the difference between a decision node and a fork?',
    options: [
      'Decision for parallelism, fork for conditions',
      'Decision chooses ONE branch, fork launches ALL branches in parallel',
      'Fork is faster',
      'No difference'
    ],
    correct: 1,
    explanation: 'The decision node (diamond) chooses a single branch based on a condition. The fork (bar) launches all branches simultaneously in parallel.'
  },
  // Chapter 8 - State Diagram
  {
    id: 16,
    category: 'States',
    question: 'What is a state in a state diagram?',
    options: [
      'A single action',
      'A stable situation where an object satisfies a condition',
      'A transition',
      'A message'
    ],
    correct: 1,
    explanation: 'A state represents a stable situation in which an object satisfies a condition, executes an activity, or waits for an event.'
  },
  {
    id: 17,
    category: 'States',
    question: 'What is the correct syntax of a transition?',
    options: [
      'action [guard] / event',
      'event [guard] / action',
      '[guard] event action',
      'event action guard'
    ],
    correct: 1,
    explanation: 'The syntax of a transition is: event [guard] / action. The event triggers the transition, the guard is a condition, and the action is executed during the transition.'
  }
];

export default function Quiz() {
  const { language } = useLanguage();
  const quizQuestions = language === 'fr' ? quizQuestionsFr : quizQuestionsEn;
  
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [score, setScore] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [quizComplete, setQuizComplete] = useState(false);
  const [quizStarted, setQuizStarted] = useState(false);

  const question = quizQuestions[currentQuestion];

  const handleAnswerSelect = (index) => {
    if (showExplanation) return;
    setSelectedAnswer(index);
  };

  const handleConfirm = () => {
    if (selectedAnswer === null) return;
    
    const isCorrect = selectedAnswer === question.correct;
    if (isCorrect) {
      setScore(score + 1);
    }
    
    setAnswers([...answers, { 
      questionId: question.id, 
      selected: selectedAnswer, 
      correct: question.correct,
      isCorrect 
    }]);
    setShowExplanation(true);
  };

  const handleNext = () => {
    if (currentQuestion < quizQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
      setShowExplanation(false);
    } else {
      setQuizComplete(true);
    }
  };

  const handleRestart = () => {
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setShowExplanation(false);
    setScore(0);
    setAnswers([]);
    setQuizComplete(false);
  };

  if (!quizStarted) {
    return <QuizIntro onStart={() => setQuizStarted(true)} language={language} />;
  }

  if (quizComplete) {
    return (
      <QuizResults 
        score={score} 
        total={quizQuestions.length} 
        answers={answers}
        questions={quizQuestions}
        onRestart={handleRestart}
        language={language}
      />
    );
  }

  return (
    <div className="quiz-page">
      <div className="quiz-container">
        {/* Progress */}
        <div className="quiz-progress">
          <div className="progress-info">
            <span className="progress-text">
              Question {currentQuestion + 1} {language === 'fr' ? 'sur' : 'of'} {quizQuestions.length}
            </span>
            <span className="score-text">Score: {score}</span>
          </div>
          <div className="progress-bar">
            <motion.div 
              className="progress-fill"
              initial={{ width: 0 }}
              animate={{ width: `${((currentQuestion + 1) / quizQuestions.length) * 100}%` }}
              transition={{ duration: 0.3 }}
            />
          </div>
        </div>

        {/* Question */}
        <AnimatePresence mode="wait">
          <motion.div
            key={question.id}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            className="question-card"
          >
            <div className="question-category">
              <span className="category-badge">{question.category}</span>
            </div>
            
            <h2 className="question-text">{question.question}</h2>

            <div className="options-list">
              {question.options.map((option, index) => {
                let optionClass = 'option-button';
                if (showExplanation) {
                  if (index === question.correct) {
                    optionClass += ' correct';
                  } else if (index === selectedAnswer && index !== question.correct) {
                    optionClass += ' incorrect';
                  }
                } else if (index === selectedAnswer) {
                  optionClass += ' selected';
                }

                return (
                  <motion.button
                    key={index}
                    className={optionClass}
                    onClick={() => handleAnswerSelect(index)}
                    whileHover={!showExplanation ? { scale: 1.01 } : {}}
                    whileTap={!showExplanation ? { scale: 0.99 } : {}}
                  >
                    <span className="option-letter">
                      {String.fromCharCode(65 + index)}
                    </span>
                    <span className="option-text">{option}</span>
                    {showExplanation && index === question.correct && (
                      <CheckCircle2 className="option-icon correct" size={20} />
                    )}
                    {showExplanation && index === selectedAnswer && index !== question.correct && (
                      <XCircle className="option-icon incorrect" size={20} />
                    )}
                  </motion.button>
                );
              })}
            </div>

            {/* Explanation */}
            <AnimatePresence>
              {showExplanation && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="explanation-box"
                >
                  <div className="explanation-header">
                    <Lightbulb size={18} />
                    <span>{language === 'fr' ? 'Explication' : 'Explanation'}</span>
                  </div>
                  <p>{question.explanation}</p>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Actions */}
            <div className="question-actions">
              {!showExplanation ? (
                <button 
                  className="btn-primary"
                  onClick={handleConfirm}
                  disabled={selectedAnswer === null}
                >
                  {language === 'fr' ? 'Valider ma réponse' : 'Submit answer'}
                </button>
              ) : (
                <button className="btn-primary" onClick={handleNext}>
                  {currentQuestion < quizQuestions.length - 1 ? (
                    <>
                      <span>{language === 'fr' ? 'Question suivante' : 'Next question'}</span>
                      <ArrowRight size={18} />
                    </>
                  ) : (
                    <>
                      <span>{language === 'fr' ? 'Voir les résultats' : 'See results'}</span>
                      <Trophy size={18} />
                    </>
                  )}
                </button>
              )}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}

function QuizIntro({ onStart, language }) {
  return (
    <div className="quiz-page">
      <motion.div 
        className="quiz-intro"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="intro-icon">
          <Brain size={48} />
        </div>
        
        <h1>{language === 'fr' ? 'Quiz UML' : 'UML Quiz'}</h1>
        <p className="intro-description">
          {language === 'fr' 
            ? 'Testez vos connaissances sur les diagrammes de cas d\'utilisation et les diagrammes de classes.'
            : 'Test your knowledge on use case diagrams and class diagrams.'}
        </p>

        <div className="quiz-stats">
          <div className="stat-item">
            <Target size={20} />
            <span>{language === 'fr' ? `${quizQuestionsFr.length} questions` : `${quizQuestionsEn.length} questions`}</span>
          </div>
          <div className="stat-item">
            <Clock size={20} />
            <span>~10 {language === 'fr' ? 'minutes' : 'minutes'}</span>
          </div>
        </div>

        <div className="quiz-topics">
          <h3>{language === 'fr' ? 'Sujets couverts' : 'Topics covered'}</h3>
          <div className="topic-tags">
            <span className="topic-tag">{language === 'fr' ? 'Cas d\'utilisation' : 'Use Cases'}</span>
            <span className="topic-tag">{language === 'fr' ? 'Diagrammes de classes' : 'Class Diagrams'}</span>
            <span className="topic-tag">{language === 'fr' ? 'Diagrammes de séquence' : 'Sequence Diagrams'}</span>
            <span className="topic-tag">{language === 'fr' ? 'Diagrammes d\'activité' : 'Activity Diagrams'}</span>
            <span className="topic-tag">{language === 'fr' ? 'Diagrammes d\'états' : 'State Diagrams'}</span>
          </div>
        </div>

        <button className="btn-start" onClick={onStart}>
          <span>{language === 'fr' ? 'Commencer le quiz' : 'Start quiz'}</span>
          <ArrowRight size={20} />
        </button>
      </motion.div>
    </div>
  );
}

function QuizResults({ score, total, answers, questions, onRestart, language }) {
  const percentage = Math.round((score / total) * 100);
  
  let message, messageClass;
  if (percentage >= 80) {
    message = language === 'fr' 
      ? 'Excellent ! Vous maîtrisez les concepts UML !' 
      : 'Excellent! You have mastered UML concepts!';
    messageClass = 'excellent';
  } else if (percentage >= 60) {
    message = language === 'fr' 
      ? 'Bien joué ! Continuez à réviser pour parfaire vos connaissances.' 
      : 'Good job! Keep reviewing to perfect your knowledge.';
    messageClass = 'good';
  } else if (percentage >= 40) {
    message = language === 'fr' 
      ? 'Pas mal ! Revoyez les chapitres pour améliorer votre score.' 
      : 'Not bad! Review the chapters to improve your score.';
    messageClass = 'average';
  } else {
    message = language === 'fr' 
      ? 'Continuez à apprendre ! Relisez les chapitres et réessayez.' 
      : 'Keep learning! Re-read the chapters and try again.';
    messageClass = 'needs-work';
  }

  return (
    <div className="quiz-page">
      <motion.div 
        className="quiz-results"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="results-header">
          <div className={`score-circle ${messageClass}`}>
            <span className="score-value">{percentage}%</span>
            <span className="score-label">{score}/{total}</span>
          </div>
          
          <h1>{language === 'fr' ? 'Quiz Terminé !' : 'Quiz Complete!'}</h1>
          <p className={`results-message ${messageClass}`}>{message}</p>
        </div>

        <div className="results-breakdown">
          <h3>{language === 'fr' ? 'Récapitulatif' : 'Summary'}</h3>
          <div className="breakdown-list">
            {answers.map((answer, index) => {
              const q = questions.find(q => q.id === answer.questionId);
              return (
                <div key={index} className={`breakdown-item ${answer.isCorrect ? 'correct' : 'incorrect'}`}>
                  <div className="breakdown-icon">
                    {answer.isCorrect ? (
                      <CheckCircle2 size={18} />
                    ) : (
                      <XCircle size={18} />
                    )}
                  </div>
                  <div className="breakdown-content">
                    <span className="breakdown-category">{q?.category}</span>
                    <span className="breakdown-question">{q?.question}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="results-actions">
          <button className="btn-restart" onClick={onRestart}>
            <RotateCcw size={18} />
            <span>{language === 'fr' ? 'Recommencer' : 'Restart'}</span>
          </button>
        </div>
      </motion.div>
    </div>
  );
}
