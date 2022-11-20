namespace Taiizor.Essentials.Blazor.Extension
{
    public class Attribute
    {
        public static async Task Set(string Identify, string Name)
        {
            await Set(Identify, Name, "");
        }

        public static async Task Set(string Identify, string Name, string Value)
        {
            await Interop.Call("Taiizor.Attribute.Set", Identify, Name, Value);
        }

        public static async ValueTask<string> Get(string Identify, string Name)
        {
            return await Interop.CallString("Taiizor.Attribute.Get", Identify, Name);
        }

        public static async ValueTask<bool> Check(string Identify, string Name)
        {
            return await Interop.CallBool("Taiizor.Attribute.Check", Identify, Name);
        }

        public static async ValueTask<bool> Check(string Identify, string Name, string Value)
        {
            if (await Check(Identify, Name) && await Get(Identify, Name) == Value)
            {
                return true;
            }

            return false;
        }

        public static async Task Remove(string Identify, string Name)
        {
            await Interop.Call("Taiizor.Attribute.Remove", Identify, Name);
        }
    }
}