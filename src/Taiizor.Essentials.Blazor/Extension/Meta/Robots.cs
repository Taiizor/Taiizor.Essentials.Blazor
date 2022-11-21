namespace Taiizor.Essentials.Blazor.Extension.Meta
{
    public class Robots
    {
        public static async Task Add(string Content)
        {
            await Interop.Call("Taiizor.Meta.Robots.Add", Content);
        }
    }
}