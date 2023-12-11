# React ehallenge

### What you'll do

In this coding challenge you will build a form that generates an array of permissions. These permissions can be used to access the Palisade platform programmatically via our API. Each permission in the array gives the API access to specific resources for a specific operation.

Example:

`transactions:read:vault:id=123&id=456`

In this example the permission grants access to READ all TRANSACTIONS in 2 specific vaults referenced by the vault IDs.

#### Permission structure

`__permissions_set__:__operation__:__resource___:__resource_scope__`

#### Resource scope

- Scope to specifics resource IDs :`id=123&id=456`
- Scope to all resources :`*`

Resource and resource scope restrictions: 
- org: Can only have a __resource_scope__ of `*`
- key: Can have a __resource_scope__ of `*` or 1 or more IDs
- vault: Can have a __resource_scope__ of `*` or 1 or more IDs


#### Permission sets

A permission set object will be provided to you via the `getPermissionSets` function. This object contains all available permission sets, operations and resources. We reccomend building your form UI and logic against this object. 

This function will look something like this:

```
export const getPermissionSets = () => {
  return {
    wallets: {
      vault: {
        create: ["org"],
        read: ["org", "vault"],
      },
      key: {
        update: ["org", "vault", "key"],
        create: ["org", "vault"],
        read: ["org", "vault", "key"],
      },
    },
  };
};
```



### Requirements

2. Build a form that generates an array of scoped permissions `["transactions:read:vault:id=123&id=456", "transactions:create:vault:id=456"]`
3. The form should only allow the user to create permissions for a single permission set at a time.
4. VAULT and WALLET level permissions should allow further scoping by 1 or more vault/key ids
5. Each permission added should be validated to ensure only correctly srtuctured permissions are sent to the backend. E.g. no half constructed permission allowed.
6. The form UI that you're building should return an array of scoped permissions.
