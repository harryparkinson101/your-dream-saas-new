import Image from 'next/image';
import profilePic from "../../public/images/profile/developer-pic-1.png";
const Content = [
  {
    title: 'Identifying Industry Challenges',
    description:
      'Venue owners in the hospitality industry face several common challenges, including effective task management, food safety compliance, safety management, and labor management. They need reliable software for creating checklists, scheduling cleaning tasks, recording meter readings, managing HACCP checks, handling allergen information, and conducting safety audits. Additionally, the cost of existing software solutions is often prohibitive, with competitors charging higher fees per venue, making them inaccessible to small businesses.',
    content: (
      <div className="h-full w-full bg-gradient-to-br from-orange-500 to-yellow-500 flex items-center justify-center text-white p-2">
        <Image
          src="/company/hospitality-challenges.jpeg"
          width={400}
          height={400}
          className="h-full w-full object-cover shadow-xl shadow-orange-900"
          alt="Industry Challenges"
        />
      </div>
    ),
  },
  {
    title: 'Inefficiencies in Existing Solutions',
    description:
      'Current software solutions for hospitality management exhibit significant shortcomings, such as unauthorized access by staff, limited managerial control, and the inability to update information without contacting the software providers. These inefficiencies lead to operational disruptions, causing delays and reducing overall productivity. For instance, managers are unable to update incorrect sick days or holidays without external assistance, and staff often miss shifts due to inadequate notification systems.',
    content: (
      <div className="h-full w-full bg-gradient-to-br from-pink-500 to-indigo-500 flex items-center justify-center text-white p-2">
        <Image
          src={profilePic}
          width={400}
          height={400}
          className="h-full w-full object-cover shadow-xl shadow-pink-900"
          alt="Inefficiencies"
        />
      </div>
    ),
  },
  {
    title: 'Operational Pain Points',
    description:
      'Venue owners encounter several operational pain points, including inventory management, staff scheduling, and task delegation. These challenges disrupt day-to-day operations, leading to inefficiencies and reduced profitability. Ineffective inventory management can result in stock shortages or overstocking, staff scheduling issues can cause understaffing or overstaffing, and poor task delegation can hinder productivity. Such operational disruptions can increase costs and negatively impact customer satisfaction.',
    content: (
      <div className="h-full w-full bg-gradient-to-br from-orange-500 to-yellow-500 flex items-center justify-center text-white p-2">
        <Image
          src={profilePic}
          width={400}
          height={400}
          className="h-full w-full object-cover shadow-xl shadow-orange-900"
          alt="Pain Points"
        />
      </div>
    ),
  },
  {
    title: 'Customer Feedback and Insights',
    description:
      'Feedback from venue owners highlights several key issues with existing software solutions, including high pricing, inefficient rota management, poor notification systems, and inflexible user roles. BrewBuddy addresses these concerns by offering flexible pricing tiers, enhanced rota management, improved notification systems, and customizable user permissions. Managers have CRUD control and can delegate tasks effectively, ensuring a more efficient and user-friendly experience.',
    content: (
      <div className="h-full w-full bg-gradient-to-br from-cyan-500 to-emerald-500 flex items-center justify-center text-white p-2">
        <Image
          src={profilePic}
          width={400}
          height={400}
          className="h-full w-full object-cover shadow-xl shadow-cyan-900"
          alt="Insights"
        />
      </div>
    ),
  },
  {
    title: 'Opportunities for Improvement',
    description:
      'The greatest opportunities for improvement in hospitality management software lie in enhancing user experience through innovation and technology. Areas such as inventory management, staff scheduling, and task delegation can benefit significantly from automation and integration with communication platforms like Slack. By leveraging these opportunities, BrewBuddy aims to provide a superior user experience for venue owners, helping them streamline operations and improve efficiency.',
    content: (
      <div className="h-full w-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-white p-2">
        <Image
          src={profilePic}
          width={400}
          height={400}
          className="h-full w-full object-cover shadow-xl shadow-blue-900"
          alt="Opportunities for Improvement"
        />
      </div>
    ),
  },
  {
    title: 'BrewBuddy\'s Approach to Challenges',
    description:
      'BrewBuddy identifies and prioritizes the most pressing challenges faced by venue owners through direct feedback and industry analysis. By employing features such as flexible pricing tiers, robust notification systems, and customizable user roles, BrewBuddy effectively overcomes these challenges. For example, our solution allows managers to update rotas seamlessly, send notifications via email, SMS, or Slack, and ensure all team members are on the same page, thereby improving operational efficiency.',
    content: (
      <div className="h-full w-full bg-gradient-to-br from-green-500 to-teal-500 flex items-center justify-center text-white  p-2">
        <Image
          src={profilePic}
          width={400}
          height={400}
          className="h-full w-full object-cover text-white shadow-xl shadow-green-900"
          alt="BrewBuddy's Approach"
        />
      </div>
    ),
  },
];
export default Content;