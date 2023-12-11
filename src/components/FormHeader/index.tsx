import styled from "styled-components";

export const Wrapper = styled.div`
  width: 400px;
`;

export const FormHeader: React.FC = () => {
  return (
    <Wrapper>
      <h2>Permission sets</h2>
      <p>
        Create a group of permissions before generating your API credentials.
        The scope of each permission type can be limited to particular vaults or
        keys. A permission set can also be updated once generated.
      </p>
      <h3>Permission set type</h3>
      <p>
        Each permission sets gives you a defined set of available permissions.
        Changing set type will remove permissions if credentials have not been
        generated.Only permissions available to your role will be visible.
      </p>
    </Wrapper>
  );
};
