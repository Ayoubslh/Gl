import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Box, 
  ChevronRight, 
  BookOpen, 
  Layers,
  Link,
  FileText,
  Lightbulb,
  CheckCircle2,
  Lock,
  Unlock,
  Hash
} from 'lucide-react';
import { 
  VehicleClassDiagram, 
  LibraryClassDiagram, 
  AssociationTypesDiagram,
  MultiplicityDiagram 
} from '../../components/Diagrams/ClassDiagramSVG';
import './Chapter5.css';

const sections = [
  { id: 'intro', title: 'Introduction', icon: BookOpen },
  { id: 'class', title: 'Structure d\'une Classe', icon: Box },
  { id: 'relations', title: 'Relations', icon: Link },
  { id: 'objects', title: 'Diagramme d\'Objets', icon: Layers },
  { id: 'example', title: 'Exemple Complet', icon: FileText }
];

export default function Chapter5() {
  const [activeSection, setActiveSection] = useState('intro');

  return (
    <div className="chapter-page">
      <motion.header 
        className="chapter-header"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <div className="chapter-badge">
          <Box size={20} />
          <span>Chapitre 5</span>
        </div>
        <h1>Diagrammes de Classes & Objets</h1>
        <p className="chapter-description">
          Modélisez la structure statique de votre système avec les classes et leurs relations
        </p>
      </motion.header>

      <div className="chapter-layout">
        <nav className="section-nav">
          {sections.map((section, index) => (
            <motion.button
              key={section.id}
              className={`section-nav-item ${activeSection === section.id ? 'active' : ''}`}
              onClick={() => setActiveSection(section.id)}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <section.icon size={18} />
              <span>{section.title}</span>
              <ChevronRight size={16} className="arrow" />
            </motion.button>
          ))}
        </nav>

        <div className="section-content">
          <AnimatePresence mode="wait">
            {activeSection === 'intro' && (
              <motion.div
                key="intro"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="content-section"
              >
                <h2>🎯 Introduction aux Diagrammes de Classes</h2>
                
                <div className="info-card highlight">
                  <Lightbulb className="card-icon" />
                  <div>
                    <h4>Définition</h4>
                    <p>
                      Le <strong>diagramme de classes</strong> est le diagramme le plus important en UML. 
                      Il représente la structure statique du système en montrant les classes, leurs attributs, 
                      leurs méthodes et les relations entre elles.
                    </p>
                  </div>
                </div>

                <h3>Concepts Clés</h3>
                <div className="concepts-grid">
                  <div className="concept-card">
                    <div className="concept-header">
                      <Box size={20} />
                      <h4>Classe</h4>
                    </div>
                    <p>Description abstraite d'un ensemble d'objets partageant les mêmes caractéristiques</p>
                  </div>
                  <div className="concept-card">
                    <div className="concept-header">
                      <Layers size={20} />
                      <h4>Objet</h4>
                    </div>
                    <p>Instance d'une classe avec des valeurs concrètes pour ses attributs</p>
                  </div>
                  <div className="concept-card">
                    <div className="concept-header">
                      <Hash size={20} />
                      <h4>Attribut</h4>
                    </div>
                    <p>Propriété typée représentant une caractéristique de la classe</p>
                  </div>
                  <div className="concept-card">
                    <div className="concept-header">
                      <FileText size={20} />
                      <h4>Méthode</h4>
                    </div>
                    <p>Opération définissant un comportement de la classe</p>
                  </div>
                </div>

                <h3>Utilité</h3>
                <div className="utility-list">
                  <div className="utility-item">
                    <CheckCircle2 className="utility-icon" />
                    <span>Représenter le modèle du domaine métier</span>
                  </div>
                  <div className="utility-item">
                    <CheckCircle2 className="utility-icon" />
                    <span>Définir l'architecture des données</span>
                  </div>
                  <div className="utility-item">
                    <CheckCircle2 className="utility-icon" />
                    <span>Servir de base pour la génération de code</span>
                  </div>
                  <div className="utility-item">
                    <CheckCircle2 className="utility-icon" />
                    <span>Documenter la structure du système</span>
                  </div>
                </div>
              </motion.div>
            )}

            {activeSection === 'class' && (
              <motion.div
                key="class"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="content-section"
              >
                <h2>📦 Structure d'une Classe</h2>

                <div className="class-anatomy">
                  <div className="class-diagram-visual">
                    <div className="uml-class">
                      <div className="class-name">Personne</div>
                      <div className="class-attributes">
                        <div className="attr">- nom: String</div>
                        <div className="attr">- age: Integer</div>
                        <div className="attr"># dateNaissance: Date</div>
                        <div className="attr">+ email: String</div>
                      </div>
                      <div className="class-methods">
                        <div className="method">+ getNom(): String</div>
                        <div className="method">+ setAge(a: Integer): void</div>
                        <div className="method"># calculerAge(): Integer</div>
                        <div className="method">- validerEmail(): Boolean</div>
                      </div>
                    </div>
                  </div>
                  <div className="class-explanation">
                    <div className="expl-section">
                      <h4>Compartiment 1: Nom</h4>
                      <p>Le nom de la classe, centré et en gras</p>
                    </div>
                    <div className="expl-section">
                      <h4>Compartiment 2: Attributs</h4>
                      <p>Les propriétés de la classe avec visibilité et type</p>
                    </div>
                    <div className="expl-section">
                      <h4>Compartiment 3: Méthodes</h4>
                      <p>Les opérations avec paramètres et type de retour</p>
                    </div>
                  </div>
                </div>

                <h3>Visibilité</h3>
                <div className="visibility-table">
                  <div className="vis-row header">
                    <span>Symbole</span>
                    <span>Visibilité</span>
                    <span>Accès</span>
                  </div>
                  <div className="vis-row">
                    <span className="vis-symbol public">+</span>
                    <span>Public</span>
                    <span>Accessible par toutes les classes</span>
                  </div>
                  <div className="vis-row">
                    <span className="vis-symbol private">-</span>
                    <span>Private</span>
                    <span>Accessible uniquement dans la classe</span>
                  </div>
                  <div className="vis-row">
                    <span className="vis-symbol protected">#</span>
                    <span>Protected</span>
                    <span>Accessible par la classe et ses sous-classes</span>
                  </div>
                  <div className="vis-row">
                    <span className="vis-symbol package">~</span>
                    <span>Package</span>
                    <span>Accessible dans le même package</span>
                  </div>
                </div>

                <h3>Syntaxe des Attributs</h3>
                <div className="syntax-box">
                  <code>visibilité nom : type [multiplicité] = valeurParDéfaut</code>
                  <div className="syntax-examples">
                    <div className="example">- nom: String</div>
                    <div className="example">+ notes: Integer[0..*]</div>
                    <div className="example"># status: String = "actif"</div>
                  </div>
                </div>

                <h3>Syntaxe des Méthodes</h3>
                <div className="syntax-box">
                  <code>visibilité nom(paramètres) : typeRetour</code>
                  <div className="syntax-examples">
                    <div className="example">+ calculerTotal(): Double</div>
                    <div className="example">+ setNom(n: String): void</div>
                    <div className="example">+ rechercher(critere: String, max: Integer): List&lt;Resultat&gt;</div>
                  </div>
                </div>

                <h3>Classes Spéciales</h3>
                <div className="special-classes">
                  <div className="special-class">
                    <div className="uml-class abstract">
                      <div className="class-stereotype">«abstract»</div>
                      <div className="class-name italic">Forme</div>
                      <div className="class-attributes">
                        <div className="attr"># couleur: String</div>
                      </div>
                      <div className="class-methods">
                        <div className="method italic">+ calculerAire(): Double</div>
                      </div>
                    </div>
                    <p>Classe Abstraite</p>
                  </div>
                  <div className="special-class">
                    <div className="uml-class interface">
                      <div className="class-stereotype">«interface»</div>
                      <div className="class-name">Comparable</div>
                      <div className="class-methods">
                        <div className="method">+ compareTo(o: Object): Integer</div>
                      </div>
                    </div>
                    <p>Interface</p>
                  </div>
                </div>
              </motion.div>
            )}

            {activeSection === 'relations' && (
              <motion.div
                key="relations"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="content-section"
              >
                <h2>🔗 Relations entre Classes</h2>

                <AssociationTypesDiagram />
                <div className="relations-grid">
                  <div className="relation-item">
                    <div className="relation-visual">
                      <div className="mini-class">A</div>
                      <div className="relation-line association">
                        <div className="line"></div>
                      </div>
                      <div className="mini-class">B</div>
                    </div>
                    <div className="relation-details">
                      <h4>Association</h4>
                      <p>Relation structurelle entre deux classes. Peut avoir un nom, des rôles et des multiplicités.</p>
                      <div className="relation-code">Personne ── Adresse</div>
                    </div>
                  </div>

                  <div className="relation-item">
                    <div className="relation-visual">
                      <div className="mini-class">A</div>
                      <div className="relation-line aggregation">
                        <div className="diamond empty"></div>
                        <div className="line"></div>
                      </div>
                      <div className="mini-class">B</div>
                    </div>
                    <div className="relation-details">
                      <h4>Agrégation</h4>
                      <p>Relation "a-un" faible. Le tout peut exister sans ses parties. Losange vide côté conteneur.</p>
                      <div className="relation-code">Équipe ◇── Joueur</div>
                    </div>
                  </div>

                  <div className="relation-item">
                    <div className="relation-visual">
                      <div className="mini-class">A</div>
                      <div className="relation-line composition">
                        <div className="diamond filled"></div>
                        <div className="line"></div>
                      </div>
                      <div className="mini-class">B</div>
                    </div>
                    <div className="relation-details">
                      <h4>Composition</h4>
                      <p>Relation "a-un" forte. Le tout est responsable du cycle de vie des parties. Losange plein.</p>
                      <div className="relation-code">Maison ◆── Pièce</div>
                    </div>
                  </div>

                  <div className="relation-item">
                    <div className="relation-visual">
                      <div className="mini-class">A</div>
                      <div className="relation-line inheritance">
                        <div className="line"></div>
                        <div className="triangle"></div>
                      </div>
                      <div className="mini-class">B</div>
                    </div>
                    <div className="relation-details">
                      <h4>Héritage (Généralisation)</h4>
                      <p>Relation "est-un". La classe enfant hérite des attributs et méthodes de la classe parent.</p>
                      <div className="relation-code">Étudiant ──▷ Personne</div>
                    </div>
                  </div>

                  <div className="relation-item">
                    <div className="relation-visual">
                      <div className="mini-class">A</div>
                      <div className="relation-line realization">
                        <div className="dashed-line"></div>
                        <div className="triangle empty"></div>
                      </div>
                      <div className="mini-class interface">«I»</div>
                    </div>
                    <div className="relation-details">
                      <h4>Réalisation</h4>
                      <p>Une classe implémente une interface. Ligne pointillée avec triangle vide.</p>
                      <div className="relation-code">ArrayList - - -▷ List</div>
                    </div>
                  </div>

                  <div className="relation-item">
                    <div className="relation-visual">
                      <div className="mini-class">A</div>
                      <div className="relation-line dependency">
                        <div className="dashed-line"></div>
                        <div className="arrow-head"></div>
                      </div>
                      <div className="mini-class">B</div>
                    </div>
                    <div className="relation-details">
                      <h4>Dépendance</h4>
                      <p>Relation d'utilisation temporaire. A utilise B (paramètre, variable locale, etc.)</p>
                      <div className="relation-code">Contrôleur - - -&gt; Service</div>
                    </div>
                  </div>
                </div>

                <h3>Multiplicités</h3>
                <MultiplicityDiagram />
              </motion.div>
            )}

            {activeSection === 'objects' && (
              <motion.div
                key="objects"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="content-section"
              >
                <h2>📋 Diagramme d'Objets</h2>
                
                <div className="info-card">
                  <div>
                    <h4>Définition</h4>
                    <p>
                      Un <strong>diagramme d'objets</strong> représente les instances de classes 
                      à un moment précis (snapshot). Il montre les objets et leurs liens.
                    </p>
                  </div>
                </div>

                <h3>Notation d'un Objet</h3>
                <div className="object-notation">
                  <div className="uml-object">
                    <div className="object-name">jean : Personne</div>
                    <div className="object-values">
                      <div className="value">nom = "Dupont"</div>
                      <div className="value">age = 25</div>
                      <div className="value">email = "jean@mail.com"</div>
                    </div>
                  </div>
                  <div className="notation-rules">
                    <div className="rule">
                      <CheckCircle2 size={16} />
                      <span>Nom souligné: <code>nomObjet : Classe</code></span>
                    </div>
                    <div className="rule">
                      <CheckCircle2 size={16} />
                      <span>Valeurs au format: <code>attribut = valeur</code></span>
                    </div>
                    <div className="rule">
                      <CheckCircle2 size={16} />
                      <span>Objet anonyme: <code>: Classe</code></span>
                    </div>
                  </div>
                </div>

                <h3>Comparaison Classe vs Objet</h3>
                <div className="comparison-visual">
                  <div className="comparison-item">
                    <h4>Diagramme de Classes</h4>
                    <div className="uml-class small">
                      <div className="class-name">Voiture</div>
                      <div className="class-attributes">
                        <div className="attr">- marque: String</div>
                        <div className="attr">- modele: String</div>
                      </div>
                    </div>
                    <p>Structure abstraite</p>
                  </div>
                  <div className="comparison-arrow">→</div>
                  <div className="comparison-item">
                    <h4>Diagramme d'Objets</h4>
                    <div className="uml-object small">
                      <div className="object-name">maVoiture : Voiture</div>
                      <div className="object-values">
                        <div className="value">marque = "Toyota"</div>
                        <div className="value">modele = "Corolla"</div>
                      </div>
                    </div>
                    <p>Instance concrète</p>
                  </div>
                </div>

                <h3>Liens entre Objets</h3>
                <div className="links-demo">
                  <div className="uml-object">
                    <div className="object-name">p1 : Personne</div>
                    <div className="object-values">
                      <div className="value">nom = "Alice"</div>
                    </div>
                  </div>
                  <div className="object-link">
                    <div className="link-line"></div>
                    <span className="link-label">habite</span>
                  </div>
                  <div className="uml-object">
                    <div className="object-name">a1 : Adresse</div>
                    <div className="object-values">
                      <div className="value">rue = "10 rue Paris"</div>
                      <div className="value">ville = "Lyon"</div>
                    </div>
                  </div>
                </div>
                <p className="demo-note">
                  Les liens sont des instances des associations définies dans le diagramme de classes.
                </p>
              </motion.div>
            )}

            {activeSection === 'example' && (
              <motion.div
                key="example"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="content-section"
              >
                <h2>📝 Exemples Complets</h2>
                
                <VehicleClassDiagram />
                <LibraryClassDiagram />

                <h3>Points Importants</h3>
                <div className="key-points">
                  <div className="key-point">
                    <span className="point-number">1</span>
                    <p><strong>Héritage:</strong> Représenté par une flèche avec triangle vide (Voiture hérite de Véhicule)</p>
                  </div>
                  <div className="key-point">
                    <span className="point-number">2</span>
                    <p><strong>Composition:</strong> Losange plein - les parties n'existent pas sans le tout</p>
                  </div>
                  <div className="key-point">
                    <span className="point-number">3</span>
                    <p><strong>Agrégation:</strong> Losange vide - relation plus faible, parties peuvent exister seules</p>
                  </div>
                  <div className="key-point">
                    <span className="point-number">4</span>
                    <p><strong>Multiplicités:</strong> Indiquent le nombre d'instances dans la relation (1, *, 0..1, 1..*)</p>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
