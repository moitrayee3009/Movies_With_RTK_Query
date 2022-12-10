import styled from 'styled-components'

const Languages = styled.div`
  cursor: pointer !important;
  display: flex !important;
  flex-wrap: wrap !important;
  justify-content: center !important;
  font-size: 0.9rem !important;
  line-height: 1.75rem !important;
  font-weight: 600 !important;
  /* padding: 3rem 0 5rem 0 !important; */
  padding-bottom: 2rem;

  .active {
    color: #f96e85 !important;
    font-weight: bold !important;
  }
`
const Language = styled.div`
  margin-right: 15px !important;

  :hover {
    color: #f96e85 !important;
  }
`

export { Languages, Language }
