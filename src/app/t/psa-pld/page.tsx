import { type Metadata } from 'next'

import { Blockquote } from '@/components/Blockquote'
import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { GridList, GridListItem } from '@/components/GridList'
import { GridPattern } from '@/components/GridPattern'
import { List, ListItem } from '@/components/List'
import { PageIntro } from '@/components/PageIntro'
import { SectionIntro } from '@/components/SectionIntro'
import { StylizedImage } from '@/components/StylizedImage'
import { TagList, TagListItem } from '@/components/TagList'
import imageLaptop from '@/images/laptop.jpg'
import imageMeeting from '@/images/meeting.jpg'
import imageWhiteboard from '@/images/whiteboard.jpg'
import flyerTraining from '@/images/t/psa-pld.png';
import { Button } from '@/components/Button'
import Link from 'next/link'
import { Border } from '@/components/Border'
import { SocialMedia } from '@/components/SocialMedia'
import { useId } from 'react'
import Image from 'next/image'
import RegisterForm from './register'

function CTARegister() {
  return (
    <div className="mt-8 flex">
      <Button
        href={'registration'}
        aria-label={`Register`}
      >
        👉 Je m'incris à la formation
      </Button>
    </div>
  )
}

function Section({
  title,
  image,
  children,
}: {
  title: string
  image: React.ComponentPropsWithoutRef<typeof StylizedImage>
  children: React.ReactNode
}) {
  return (
    <Container className="group/section [counter-increment:section]">
      <div className="lg:flex lg:items-center lg:justify-end lg:gap-x-8 lg:group-even/section:justify-start xl:gap-x-20">
        <div className="flex justify-center">
          <FadeIn className="w-[33.75rem] flex-none lg:w-[45rem]">
            <StylizedImage
              {...image}
              sizes="(min-width: 1024px) 41rem, 31rem"
              className="justify-center lg:justify-end lg:group-even/section:justify-start"
            />
          </FadeIn>
        </div>
        <div className="mt-12 lg:mt-0 lg:w-[37rem] lg:flex-none lg:group-even/section:order-first">
          <FadeIn>
            <div
              className="font-display text-base font-semibold before:text-neutral-300 before:content-['/_'] after:text-neutral-950 after:content-[counter(section,decimal-leading-zero)]"
              aria-hidden="true"
            />
            <h2 className="mt-2 font-display text-3xl font-medium tracking-tight text-neutral-950 sm:text-4xl">
              {title}
            </h2>
            <div className="mt-6">{children}</div>
          </FadeIn>
        </div>
      </div>
    </Container>
  )
}

function Day1() {
  const keywords = [
    "culture des données",
    "sensibilisation à la donnée",
    "pilotage d’activité",
    "décision basée sur les données",
    "savoir lire un tableau",
    "indicateurs clés",
    "organisation des données",
    "initiation à Excel",
    "tableaux simples",
    "erreurs fréquentes en reporting",
    "visualisation de base",
    "formation data débutant"
  ];
  return (
    <Section title="Comprendre les données et le pilotage" image={{ src: imageWhiteboard }}>
      <div className="space-y-6 text-base text-neutral-600">
        <p>
          Dans un monde où chaque action laisse une trace numérique, savoir exploiter ses données devient un atout stratégique.
          Cette première journée vise à éveiller les participants à l’importance de leurs propres données professionnelles : clients, ventes, stocks, finances, RH, etc.
          Souvent sous-exploitées, ces données contiennent pourtant des informations clés pour améliorer les décisions quotidiennes.
        </p>
        <p>
          Nous explorerons ensemble les erreurs fréquentes commises dans l’usage des données en entreprise, et comment une logique de pilotage peut transformer ces erreurs en opportunités.
          Grâce à des exemples simples et concrets, les participants comprendront la différence entre "reporter" des données et "piloter" réellement leur activité avec des indicateurs pertinents.
        </p>
        <p>
          La journée se termine par une prise en main guidée d’Excel.
          Même pour les grands débutants, les notions de base (cellules, feuilles, tris, filtres, tableaux) 
          seront expliquées pas à pas, avec des exercices concrets inspirés du terrain (activité commerciale, suivi projet, finances, etc.).
        </p>
      </div>

      <List className="mt-8">
        <ListItem title="📌 A la fin de la journée">
          Chaque participant aura identifié ses propres sources de données internes et saura commencer à les organiser pour mieux comprendre son activité.
        </ListItem>
      </List>
      <CTARegister />
      <h3 className="mt-12 font-display text-base font-semibold text-neutral-950">
        Mot clés
      </h3>
      <TagList className="mt-4">
        { keywords.map((key) => <TagListItem key={`day1-${key}`}>{key}</TagListItem>)}
      </TagList>
    </Section>
  )
}

function Day2() {
  const keywords = [
    "nettoyage des données",
    "structuration de tableau Excel",
    "qualité des données",
    "construction de KPI",
    "moyenne",
    "taux",
    "ratio",
    "écart-type",
    "lecture graphique",
    "tableau croisé dynamique",
    "analyse opérationnelle",
    "visualisation efficace",
    "données actionnables",
    "formation Excel intermédiaire",
    "data storytelling"
  ];

  return (
    <Section title="Extraire et Organiser les informations clés" image={{ src: imageLaptop, shape: 1 }}>
      <div className="space-y-6 text-base text-neutral-600">
        <p>
          L’objectif de cette deuxième journée est d’apprendre à transformer un fichier brut en un tableau clair, propre, structuré — prêt pour l’analyse.
          Car sans nettoyage, les données sont souvent inutilisables, trompeuses ou incomplètes.
          C’est ici que les participants apprendront à détecter les erreurs classiques : doublons, valeurs manquantes, formats incohérents...
        </p>
        <p>
          Nous aborderons ensuite la construction des indicateurs de performance : taux, moyennes, écarts, ratios...
          Mais au-delà de la technique, il s’agit surtout d’apprendre quel indicateur suivre pour piloter efficacement son activité, 
          en fonction de ses objectifs (productivité, rentabilité, impact…).
        </p>
        <p>
          La fin sera consacrée à la visualisation.
          Les participants découvriront les bonnes pratiques pour créer des graphiques utiles, lisibles et esthétiques.
          Enfin, ils apprendront à synthétiser leurs données grâce aux tableaux croisés dynamiques, l’un des outils les plus puissants d’Excel.
        </p>
      </div>

      <List className="mt-8">
        <ListItem title="📌 A la fin de la journée">
          Chaque participant saura extraire des informations clés et produire des indicateurs lisibles à partir de ses propres fichiers.
        </ListItem>
      </List>
      <CTARegister />
      <h3 className="mt-12 font-display text-base font-semibold text-neutral-950">
        Mots clés
      </h3>
      <TagList className="mt-4">
        { keywords.map((key) => <TagListItem key={`day1-${key}`}>{key}</TagListItem>)}
      </TagList>
    </Section>
  )
}

function Day3() {
  const keywords = [
    "tableau de bord Excel",
    "reporting automatisé",
    "pilotage visuel",
    "Power BI initiation",
    "filtres dynamiques",
    "décision stratégique",
    "KPI interactifs",
    "analyse de performance",
    "data-driven management",
    "business intelligence",
    "visualisation dynamique",
    "lecture des tendances"
  ];
  return (
    <Section title="Construire un tableau de bord de pilotage" image={{ src: imageMeeting, shape: 2 }}>
      <div className="space-y-6 text-base text-neutral-600">
        <p>
          La troisième journée est résolument pratique.
          Les participants sont guidés pas à pas pour créer un tableau de bord de pilotage complet dans Excel : 
          ils y intègrent des indicateurs clés, des filtres dynamiques, des graphiques parlants et des synthèses utiles à la décision. 
          Que ce soit pour suivre des ventes, des activités RH, des résultats financiers ou sanitaires, l’approche est toujours la même : 
          voir vite, comprendre bien, et agir juste.
        </p>
        <p>
          Nous passerons ensuite à Power BI, un outil de visualisation très utilisé en entreprise.
          Chacun apprendra à importer ses données, créer un tableau de bord interactif, filtrable, segmenté, et visuellement attractif.
          Même sans expérience technique, les participants ressortent avec une maquette fonctionnelle applicable à leur activité.
        </p>
        <p>
          Pour finir, nous apprendrons à interpréter les tableaux de bord construits :
          lire les écarts, repérer les tendances, détecter les signaux faibles.
          L’objectif est de passer de la donnée à l’action, et de devenir réellement "data-driven".
        </p>
      </div>

      
      <List className="mt-8">
        <ListItem title="📌 A la fin de la journée">
          Chaque participant saura créer et lire un tableau de bord moderne et pertinent, avec Excel ou Power BI.
        </ListItem>
      </List>
      <CTARegister />
      <h3 className="mt-12 font-display text-base font-semibold text-neutral-950">
        Mots clés
      </h3>
      <TagList className="mt-4">
        { keywords.map((key) => <TagListItem key={`day1-${key}`}>{key}</TagListItem>)}
      </TagList>
    </Section>
  )
}

function Values() {
  return (
    <div className="relative mt-24 pt-24 sm:mt-32 sm:pt-32 lg:mt-40 lg:pt-40">
      <div className="absolute inset-x-0 top-0 -z-10 h-[884px] overflow-hidden rounded-t-4xl bg-linear-to-b from-neutral-50">
        <GridPattern
          className="absolute inset-0 h-full w-full [mask-image:linear-gradient(to_bottom_left,white_40%,transparent_50%)] fill-neutral-100 stroke-neutral-950/5"
          yOffset={-270}
        />
      </div>

      <SectionIntro
        eyebrow=""
        title="Pourquoi s’inscrire à cette formation ?"
      >
        <p>
          Parce que les entreprises qui maîtrisent leurs données prennent de meilleures décisions.
          Que vous soyez dirigeant, manager ou responsable d’équipe, cette formation vous offre une méthode simple,
          efficace et concrète pour transformer vos tableaux Excel en outils d’aide à la décision puissants.
          Voici 6 bonnes raisons de ne pas manquer cette opportunité.
        </p>
      </SectionIntro>

      <Container className="mt-24">
        <GridList>
          <GridListItem title="Devenir autonome avec ses données">
            Plus besoin d’attendre un service informatique ou un consultant externe.
            Vous apprendrez à structurer, analyser et interpréter vos données vous-même, étape par étape.
          </GridListItem>
          <GridListItem title="Prendre de meilleures décisions">
            Fini les décisions à l’aveugle. Grâce aux indicateurs clés de performance (KPI),
            vous saurez où vous en êtes vraiment et sur quoi agir en priorité.
          </GridListItem>
          <GridListItem title="Gagner du temps au quotidien">
            Une fois vos tableaux bien construits, les mises à jour deviennent automatiques.
            Vous pilotez en quelques clics ce qui prenait des heures avant.
          </GridListItem>
          <GridListItem title="Maîtriser Excel et découvrir Power BI">
            Vous renforcez vos bases sur Excel, puis vous découvrez Power BI pour créer des tableaux de bord modernes,
            dynamiques et interactifs.
          </GridListItem>
          <GridListItem title="Apprendre par la pratique">
            Pas de théorie inutile : vous travaillez sur des cas concrets inspirés de la vraie vie
            (ventes, RH, suivi de projets…) avec vos propres fichiers si vous le souhaitez.
          </GridListItem>
          <GridListItem title="Booster votre impact professionnel">
            En apportant des données claires, visuelles et utiles en réunion, 
            vous gagnez en crédibilité, vous influencez mieux… et vous devenez un vrai leader orienté résultat.
          </GridListItem>
        </GridList>
      </Container>
    </div>
  )
}

function Register() {
  return (
    <div className="relative mt-8 pt-8 sm:mt-8 sm:pt-8 lg:mt-8 lg:pt-8">
      <SectionIntro
          eyebrow=""
          title="Rejoignez la formation"
        ></SectionIntro>
      <Container className="mt-24 sm:mt-32 lg:mt-40">
        <RegisterForm />
      </Container>
    </div>
  )
}


export const metadata: Metadata = {
  title: 'Piloter son activité par les données',
  description:
    "Vos données valent de l'or, sachez l'en extraire.",
}

export default function Process() {
  return (
    <>
      <PageIntro eyebrow="Formation" title="Piloter son activité par les données">
        <p>
          ❓ <strong>Managers, décideurs, entrepreneurs</strong>:
          Et si vos décisions s’appuyaient enfin sur des données fiables, visuelles et utiles ?
          En seulement 3 jours, apprenez à piloter votre activité avec Excel et Power BI, même sans compétences techniques.
          Vous repartez avec une méthode claire, un tableau de bord opérationnel, et les outils pour prendre de meilleures décisions au quotidien.
        </p>
        {/* <p>
          ❓ Et si vos décisions reposaient sur des données fiables et visuelles ? <br/>
          📌 En 3 jours, apprenez à piloter votre activité comme les grandes entreprises grâce à Excel et Power BI. 
            Aucun prérequis. 100 % pratique. Un tableau de bord opérationnel à la clé. <br/>
          👉 <strong><em>Managers, dirigeants, responsables</em></strong>: cette formation est faite pour vous.
        </p> */}
      </PageIntro>

      <div className="mt-24 space-y-24 [counter-reset:section] sm:mt-32 sm:space-y-32 lg:mt-40 lg:space-y-40">
        <Day1 />
        <Day2 />
        <Day3 />
      </div>

      <Values />

      <Register />
    </>
  )
}
