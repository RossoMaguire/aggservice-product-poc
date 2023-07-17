import SourceLogo from './SourceLogo';

const SaleTag = () => {
  return (
    <>
      <span
        style={{
          border: '1px solid #43454b',
          color: '#43454b',
          padding: '0.202em 0.6180469716em',
          fontSize: '.875em',
          textTransform: 'uppercase',
          fontWeight: '600',
          display: 'inline-block',
          margin: '10px 10px 1em',
          borderRadius: '3px',
          position: 'absolute',
        }}
      >
        Sale!
        <SourceLogo src='shopify.svg' />
      </span>
    </>
  );
};

export default SaleTag;
