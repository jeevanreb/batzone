const MaxWidth = ({
  children, // HTML DOM
  style = null, // CSS Style
  className = "", // tailwind class or class name
  ref = null, // To handle DOM
  id = "", // For id
  fullRelative = false, // To take full width and height as relative : True
  center = false, // To align container in center: True
  tabCenter = true, // To keep container align center even in tab: True
  header = false, // If MaxWidth contain header: True
}) => {
  return (
    <>
      <div
        id={id}
        ref={ref}
        style={{ ...style, position: fullRelative ? "relative" : "static" }}
        className={`flex w-screen justify-center ${fullRelative ? "" : `p-5 lg:px-10 ${!header && "lg:py-10"}`} ${center ? (tabCenter ? "md:h-screen md:items-center" : "lg:h-screen lg:items-center") : ""} ${className}`}
      >
        <div
          className={`w-full max-w-[1366px] ${center ? (tabCenter ? "md:max-h-[768px]" : "lg:max-h-[768px]") : ""}`}
          style={{ position: !fullRelative ? "relative" : "static" }}
        >
          {children}
        </div>
      </div>
    </>
  );
};

export default MaxWidth;
