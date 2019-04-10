// Constructor
Vec3 = function( x, y, z )
{
this.x = x;
this.y = y;
this.z = z;
}

// Add method
Vec3.prototype.add = function( v )
{
this.x += v.x;
this.y += v.y;
this.z += v.z;
return this;
}
// Sum method
Vec3.prototype.sum = function()
{
return this.x + this.y + this.z;
}
// min method
Vec3.prototype.min = function()
{
    if(this.x < this.y && this.x < this.z)
    {
	return this.x;
    } else if (this.y < this.x && this.y < this.z)
    {
	return this.y;
    } else {
	return this.z;
    }	
}
// mid method
Vec3.prototype.mid = function()
{
    var MIN = this.min();
    var MAX = this.max();
    if(min != this.x && max != this.x)
    {
	return this.x;
    }
    if(min != this.y && max != this.y)
    {
	return this.y;
    }
    if(min != this.z && max != this.z)
    {
	return this.z;
    }

}
// max method
Vec3.prototype.max = function()
{
    if(this.x > this.y && this.x > this.z)
    {
	return this.x;
    } else if (this.y > this.x && this.y > this.z)
    {
	return this.y;
    } else {
	return this.z;
    }
}
