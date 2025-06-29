import React from 'react';

const ProjectCard = ({ image, title, location, className = "", onClick }) => {
  return (
    <div 
      className={`project-card relative overflow-hidden rounded-lg group cursor-pointer ${className}  mt-20`}
      onClick={onClick}
    >
      <div className="overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>
      <div 
        className="absolute inset-0 flex items-end p-6 
                   bg-[linear-gradient(to_top,rgba(47,38,0,0.8),transparent)] 
                   transition-opacity duration-300 ease-in-out 
                   opacity-100 md:opacity-0 group-hover:opacity-100"
      >
        <div className="text-white">
          <h3 className="font-playfair text-lg font-semibold">{title}</h3>
          {location && (
            <p className="font-montserrat text-sm">{location}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;


{/* <div 
className={`product-card relative overflow-hidden rounded-lg group cursor-pointer ${className}`}
onClick={onClick}
>
<div className="overflow-hidden">
  <img 
    src={image} 
    alt={title}
    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
  />
</div>
<div className="product-overlay absolute inset-0 flex items-end p-6">
  <div className="text-white">
    <h3 className="font-playfair text-xl font-semibold mb-2">{title}</h3>
    {description && (
      <p className="font-montserrat text-sm opacity-90">{description}</p>
    )}
  </div>
</div>
</div> */}