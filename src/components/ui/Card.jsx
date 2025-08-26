export default function Card({ img, title, description }) {
  return (
    <article className="card-hover rounded-3xl overflow-hidden bg-white shadow-lg border border-gray-100">
      <div className="relative overflow-hidden">
        <img
          src={img}
          alt={title}
          className="h-40 sm:h-48 w-full object-cover transition-transform duration-300 hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
      </div>
      <div className="p-4 sm:p-6">
        <h3 className="font-bold text-lg sm:text-xl mb-2">{title}</h3>
        <p className="text-gray-600 text-sm sm:text-base">{description}</p>
      </div>
    </article>
  );
}
