import { Input, Divider } from 'antd'

function SearchBar(props) {
    const {searchQuery, onChange} = props
    return (        
      <form>
        <Divider>Search</Divider>
        <Input 
          type="text"
          value={searchQuery}
          onChange={onChange} 
        />
      </form>

    );
  }

export default SearchBar