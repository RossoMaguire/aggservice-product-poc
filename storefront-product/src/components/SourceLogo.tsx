interface SourceLogoProps {
  src: string;
}

const SourceLogo = ({ src }: SourceLogoProps) => {
  return (
    <span>
      <img
        src={src}
        alt='Source Logo'
        style={{
          height: '30px',
          paddingLeft: src === 'bigcommerce.png' ? '14px' : 0,
        }}
      />
    </span>
  );
};

export default SourceLogo;
