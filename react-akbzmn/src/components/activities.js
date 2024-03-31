import badminton from '../images/badminton-1.jpg';
import billiards from '../images/billiards-1.png';
import pc from '../images/pc-build.jpg';
import trophies from '../images/trophies-1.jpg';

const activities = [
  {
    title: 'Badminton',
    description: 'Playing badminton has always been a way for me to unwind and stay fit. It\'s not just about the physical exercise but also about strategizing and outsmarting the opponent, which I find parallels in problem-solving in HCI.',
    imageUrl: badminton,
  },
  {
    title: 'Billiards',
    description: 'Billiards allows me to focus and improve my precision and strategic thinking. The concentration and attention to detail required in billiards are skills that I also apply in my academic research.',
    imageUrl: billiards,
  },
];

const ExtracurricularActivities = () => {
  return (
    <div className="activities-section">
      <h2>Extracurricular Activities</h2>
      <div className="activities-container">
        {activities.map((activity, index) => (
          <div key={index} className="activity-card">
            <img src={activity.imageUrl} alt={activity.title} className="activity-image" />
            <h3>{activity.title}</h3>
            <p>{activity.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExtracurricularActivities;