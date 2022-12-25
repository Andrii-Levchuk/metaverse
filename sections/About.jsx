'use client'

import { motion } from 'framer-motion'
import { TypingText } from '../components'

import styles from '../styles'
import { fadeIn, staggerContainer } from '../utils/motion'

const About = () => (
	<section className={`${styles.paddings} relative z-10`}>
		<div className='gradient-02 z-0' />
		<motion.div
			variants={staggerContainer}
			initial='hidden'
			whileInView='show'
			viewport={{ once: false, amount: 0.25 }}
			className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
		>
			<TypingText title='| About Me' textStyles='text-center' />

			<motion.p
				variants={fadeIn('up', 'tween', 0.2, 1)}
				className='mt-[8px] font-normal sm:text-[32px] text-[20px] text-center text-secondary-white'
			>
				<span className='font-extrabold text-white'>
					I am a self-taught front-end developer
				</span>{' '}
				with a strong passion for creating user-friendly and engaging websites
				and applications. I have spent the last 1.5 years learning and
				practicing front-end development on my own, and have gained a solid
				foundation in{' '}
				<span className='font-extrabold text-white'>
					HTML, CSS, JavaScript and React.
				</span>{' '}
				<br />I am constantly learning and staying up-to-date with the latest
				technologies and best practices in front-end development. I have
				completed several online courses and workshops, and regularly
				participate in online forums and communities to learn from other
				experienced developers.{' '}
				<span className='font-extrabold text-white'>Explore</span> my portfolio projects by scrolling down
			</motion.p>

			<motion.img
				variants={fadeIn('up', 'tween', 0.3, 1)}
				src='/arrow-down.svg'
				alt='arrow down'
				className='w-[18px] h-[28px] object-contain mt-[28px]'
			/>
		</motion.div>
	</section>
)

export default About
