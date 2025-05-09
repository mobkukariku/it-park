import React from 'react'
import CoursesGeneral from '../components/CoursesGeneral'
import FAQ from '../components/FAQ'
import LearningFormat from '../components/LearningFormat'
import TechordaCourses from '../components/TechordaCourses'
import TeachersSection from '../components/TeachersSection'

const CoursesPage: React.FC = () => {
	return (
		<>
			<CoursesGeneral />
			<LearningFormat />
			<TechordaCourses />
			<TeachersSection/>
			<FAQ />
		</>
	)
}

export default CoursesPage
