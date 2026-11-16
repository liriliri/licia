## cliHelp

Output cli help.

<details>
<summary>Type Definition</summary>

```typescript
namespace cliHelp {
    interface IOption {
        name: string;
        shorthand?: string;
        desc: string;
    }
    interface ICommand {
        name: string;
        desc: string;
        usage: string | string[];
        options?: IOption[];
    }
    interface IData {
        name: string;
        usage: string | string[];
        commands: ICommand[];
    }
}
function cliHelp(data: cliHelp.IData | cliHelp.ICommand): string;
```

</details>

|Name  |Desc     |
|------|---------|
|data  |Help data|
|return|Cli help |

```javascript
const test = {
    name: 'test',
    desc: 'Generate test files',
    usage: ['<module-name> [options]', 'lpad --browser'],
    options: [
        {
            name: 'browser',
            shorthand: 'b',
            desc: 'True if test should run in a browser'
        }
    ]
};
const data = {
    name: 'licia',
    usage: '<command> [options]',
    commands: [test]
};

cliHelp(data);
cliHelp(test);
```
