# React ehallenge

### What you'll do

In this coding challenge you will build a form that generates an array of permissions. These permissions can be used to access the Palisade platform programmatically via our API. Each permission in the array gives the API access to a specific set of features and resources.

A single scoped permission looks like this:

`transactions:read:vault:id=123&id=456`

In this example the permission grants access to READ all TRANSACTIONS in 2 specific vaults referenced by the vault IDs.

#### Permission structure

`__permissions_set__:__operation__:__resource___:__resource_scope__`

#### Resource scope

- Scope to specifics resource IDs :`id=123&id=456`
- Scope to all resources :`*`

### Requirements

1. Build a form that generates an array of scoped permissions `["transactions:read:vault:id=123&id=456", "transactions:create:vault:id=456"]`
2. The form should only allow the user to create permissions for a single permission set at a time.
3. VAULT and WALLET level permissions should allow further scoping by 1 or more vault/key ids
4. Each permission added should be validated to ensure only correctly srtuctured permissions are sent to the backend. E.g. no half constructed permission allowed.
5. The form UI that you're building should return an array of scoped permissions.
