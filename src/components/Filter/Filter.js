import { PropTypes, Container, Label, Input } from 'common';
import { ClearFilterButton } from 'common/components/Button';

export const Filter = ({ value, onChange, onClearFilter }) => (
  <div>
    <Label label="Find contact by name" htmlFor="filter" />
    <Container>
      <div style={{ display: 'flex', gap: 12 }}>
        <Input type="text" name="filter" value={value} onChange={onChange} />
        <ClearFilterButton display="if" onClick={onClearFilter}>
          Clear filter
        </ClearFilterButton>
      </div>
    </Container>
  </div>
);

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onClearFilter: PropTypes.func.isRequired,
};
