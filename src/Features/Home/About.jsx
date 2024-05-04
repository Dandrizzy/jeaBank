import { FaArrowsRotate, FaAward, FaLock, FaQuestion } from "react-icons/fa6";

const features = [
 {
  name: 'Award winners',
  description:
   'Awards for online banking typically bestowed by industry experts, financial institutions, or consumer advocacy groups. ',
  icon: FaAward,
 },
 {
  name: 'Advance Technology',
  description:
   "Force behind the evolution of online banking, enabling us to deliver innovative, secure, and customer-centric financial services in today's digital age.",
  icon: FaLock,
 },
 {
  name: 'Continuous development',
  description:
   'adapt to changing customer needs, and leverage emerging technologies to enhance their digital offerings.',
  icon: FaArrowsRotate,
 },
 {
  name: '24/7 customer support',
  description:
   "Providing round-the-clock customer support ensures that help is always available, catering to customers' diverse schedules and time zones.",
  icon: FaQuestion,
 },
];

export default function About() {
 return (
  <div className="bg-white py-24 sm:py-32">
   <div className="mx-auto max-w-7xl px-6 lg:px-8">
    <div className="mx-auto max-w-2xl lg:text-center">
     <h2 className="text-base font-semibold leading-7 text-blue-600">About us</h2>
     <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
      Everything you need to know about us
     </p>
     <p className="mt-6 text-lg leading-8 text-gray-600">
      Experience the future of banking with our innovative online platform. Seamlessly manage your finances anytime, anywhere, with intuitive features and cutting-edge security. From effortless transactions to personalized support, we&apos;re committed to redefining your banking experience. Join us and unlock a world of convenience and possibilities.
     </p>
    </div>
    <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
     <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
      {features.map((feature) => (
       <div key={feature.name} className="relative pl-16">
        <dt className="text-base font-semibold leading-7 text-gray-900">
         <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600">
          <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
         </div>
         {feature.name}
        </dt>
        <dd className="mt-2 text-base leading-7 text-gray-600">{feature.description}</dd>
       </div>
      ))}
     </dl>
    </div>
   </div>
  </div>
 );
}
