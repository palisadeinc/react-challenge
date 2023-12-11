In this coding challeng you will build a UI that enables a user to build a set of scoped permissions. These permissions will enable a user to access the Palisade Platform via our API.

A single scoped permission looks like this:

["transactions:read:vault:id=123&id=456"
"transactions:create:vault:id=456"]

In this example the permission grants access to READ all TRANSACTIONS in 2 specific vaults referenced by their IDs.

Requirements:

1. The form should only allow the user to create permissions for a single permission set at a time.
2. VAULT and WALLET level permissions should allow further scoping by 1 or more vault/key ids
3. Each permission added should be validated to ensure only correctly srtuctured permissions are sent to the backend. E.g. no half constructed permission allowed.
4. The form UI that you're building should return an array of scoped permissions.
