using Taiizor.Essentials.Blazor.Enum;
using Taiizor.Essentials.Blazor.Value;

namespace Taiizor.Essentials.Blazor.Extension.Meta
{
    public class ContentType
    {
        public static async Task Set(string Content)
        {
            await Interop.Call("Taiizor.Meta.ContentType.Set", Content);
        }

        public static async ValueTask<string> Get()
        {
            return await Interop.CallString("Taiizor.Meta.Content.Equiv", Internal.MetaNames[MetaEnum.ContentType]);
        }

        public static async ValueTask<bool> Check()
        {
            return await Interop.CallBool("Taiizor.Meta.Check.Equiv", Internal.MetaNames[MetaEnum.ContentType]);
        }

        public static async ValueTask<bool> Check(string Content)
        {
            if (await Check() && await Get() == Content)
            {
                return true;
            }

            return false;
        }

        public static async Task Remove(bool Execute = false)
        {
            await Interop.Call("Taiizor.Meta.ContentType.Remove", Execute);
        }
    }
}