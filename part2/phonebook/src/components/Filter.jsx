function Filter({ search, setSearch }) {
    return (
        <div>
            <label>
                filter shown with <input value={search} onChange={(event) => setSearch(event.target.value)} />
            </label>
        </div>
    );
}

export default Filter;
