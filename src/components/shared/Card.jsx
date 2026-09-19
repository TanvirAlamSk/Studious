const Card = ({ icon:Icon,title,subtitle,icontext}) => {
  return (
    <div className="card bg-white shadow-sm">
      <div className="card-body">
        {Icon && <Icon className={`w-6 h-6 m-4 ${icontext}`} />}
        <h2 className="card-title text-normal">{title}</h2>
        <p className="text-gray-600 ">
          {subtitle}
        </p>
      </div>
    </div>
  );
};

export default Card;
