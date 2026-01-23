const SearchForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();

    // e.target === formRef.current
    const searchValue = e.target.elements?.search?.value?.trim(); // Safely access the input value, even if the 'search' element is renamed or removed in the DOM
    if (!searchValue) return;

    console.log(searchValue);
  };

  return (
    <section>
      <h1 className='title'>Unsplash images</h1>

      <form className='search-form' onSubmit={handleSubmit}>
        <input
          type='text'
          name='search'
          placeholder='cat'
          className='form-input search-input'
        />

        <button type='submit' className='btn'>
          Search
        </button>
      </form>
    </section>
  );
};

export default SearchForm;
