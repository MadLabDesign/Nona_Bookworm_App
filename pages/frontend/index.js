import BaseLayout from "../../components/Layout/BaseLayout";
import withMaterial from "../../lib/withMaterial";
import IntroCard from "../../components/IntroCard";
import { explore, grow, know } from '../../lib/colors';
import { Component } from 'react';




const content = {
    explore: 'Become more self-aware and effective by exploring your personal iEQ Profile. Your Integrative Enneagram Profile is unique to you as an individual, as it goes beyond identifying Enneagram Type, to include other elements such as Centers of Expression, Instincts and Subtype and Social and Conflict styles',
    know: 'Discover the power and potential of the Enneagram model and explore the 9 Types. The Enneagram offers deep insights into diverse Types of people, reflecting nine different personalities, motivations and self-limiting belief systems. This powerful tool is supported by both modern neuroscience and ancient wisdom, and creates the potential for accelerated development.',
    grow: 'Start a journey of self-awareness and development with a unique, personalised Integrative Enneagram development plan. Based on your individual Integrative Enneagram profile, this section offers a range of themed development activities and tips that are tailored to your style and needs.',
}

const page = () =>

    <BaseLayout>

        <IntroCard color={explore} headerTitle={'Explore'} buttonLink="/frontend/explore">{content.explore}</IntroCard>
        <IntroCard color={know} headerTitle={'Know'} buttonLink="/frontend/know">{content.know}</IntroCard>
        <IntroCard color={grow} headerTitle={'Grow'} buttonLink="/frontend/grow">{content.grow}</IntroCard>
    </BaseLayout>

export default withMaterial(page)