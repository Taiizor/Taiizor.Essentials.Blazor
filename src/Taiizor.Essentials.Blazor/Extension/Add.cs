namespace Taiizor.Essentials.Blazor.Extension
{
    public class Add
    {
        public static async Task Head(string Tag)
        {
            await Interop.Call("Taiizor.Add.Head", Tag);
        }

        public static async Task HeadScript(string Node)
        {
            await Interop.Call("Taiizor.Add.Script.Head", Node);
        }

        public static async Task Body(string Tag)
        {
            await Interop.Call("Taiizor.Add.Body", Tag);
        }

        public static async Task BodyScript(string Node)
        {
            await Interop.Call("Taiizor.Add.Script.Body", Node);
        }

        public static async Task Element(string Identify, string Tag)
        {
            await Interop.Call("Taiizor.Add.Element", Identify, Tag);
        }

        public static async Task ElementScript(string Identify, string Node)
        {
            await Interop.Call("Taiizor.Add.Script.Element", Identify, Node);
        }
    }
}